const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'catwalk',
  password: 'password',
  port: 5432
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  connect: (err, client, done) => {
    return pool.connect(err, client, done);
  }
};