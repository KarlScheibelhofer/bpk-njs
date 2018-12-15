const express = require('express')
const router = express.Router()

// export our router to be mounted by the parent application
module.exports = router

router.get('/hello', async (req, res) => {
  res.send('Hello World!')
})

router.get('/now', (req, res) => {
  res.send(new Date().toLocaleString())
})

router.post('/now', (req, res) => {
  res.send(new Date().toLocaleString())
})
