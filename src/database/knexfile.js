module.exports = {
  client: 'pg',
  connection: {
    host: 'db',
    user: 'postgres',
    database: 'postgres',
    charset: 'utf8'
  },
  debug: true,
  pool: {
    min: 0,
    max: 7
  }
};
