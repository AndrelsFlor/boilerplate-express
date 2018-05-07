const mysql  = require('mysql');

const connMysql = () => {

  console.log('conexao banco foi feita');

  return mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database : 'portal_noticias',
  });

};
module.exports = () => {
  return connMysql;
};
