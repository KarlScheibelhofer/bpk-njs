
const { Pool } = require('pg')

const connectionString = 'postgresql://bpk:bpk@127.0.0.1:5432/bpk'

const pool = new Pool({
  connectionString: connectionString,
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}
