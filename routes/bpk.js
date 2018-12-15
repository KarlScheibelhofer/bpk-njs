const express = require('express')
const db = require('../db')

const router = express.Router()

// export our router to be mounted by the parent application
module.exports = router

router.get('/now', async (req, res) => {
  const { rows } = await db.query('SELECT NOW()')
  res.send(rows[0])
})

// get all
router.get('/pnr', async (req, res) => {
  console.log('GET /snvr');
  const { rows } = await db.query('SELECT * FROM bpk')
  res.send(rows)
})

// delete all
router.delete('/pnr', async (req, res) => {
  console.log('DELETE /snvr');
  const { rows } = await db.query('TRUNCATE bpk')
  res.send(rows)
})

// get one
router.get('/pnr/:pnr', async (req, res) => {
  console.log('GET /snvr/:pnr');
  const { pnr } = req.params
  const bpk = req.body.bpk
  const { rows } = await db.query('SELECT * FROM bpk WHERE pnr = $1', [pnr])
  res.send(rows.slice(-1)[0])
})

// insert new
router.post('/pnr/:pnr', async (req, res) => {
  console.log('POST /snvr/:pnr');
  const { pnr } = req.params
  const bpk = req.body.bpk
  await db.query('INSERT INTO bpk(pnr, bpk) VALUES($1, $2) RETURNING id', [pnr, bpk])
    .then((qres) => {
      console.log('POST /snvr/:pnr, qres: %s', qres);
      const { id } = qres.rows[0];
      result = {
        "id": id,
        "pnr": pnr,
        "bpk": bpk,
      }
      res.status(201).send(result)
    })
    .catch(e => {
      console.log(e)
      res.sendStatus(500)
    })
})

// delete matching
router.delete('/pnr/:pnr', async (req, res) => {
  console.log('DELETE /snvr/:pnr');
  const { pnr } = req.params
  const result = await db.query('DELETE FROM bpk WHERE pnr = $1', [pnr])
    .then((qres) => res.send(qres))
    .catch(e => {
      console.log(e)
      res.sendStatus(500)
    })
})
