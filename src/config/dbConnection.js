const mysql  = require('mysql');

const connMysql = () => {

  console.log('conexao banco foi feita');

  return mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database : 'apiAtm',
  });

};
module.exports = () => {
  return connMysql;
};
