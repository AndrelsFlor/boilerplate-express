const mysql  = require('mysql');

const connMysql = () => {

  console.log('conexao banco foi feita');

const connMysql = () => {
  console.log('conexao banco foi feita');

  const con = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'apiatm',
  });

  con.query = util.promisify(con.query);
  return con;
};

export default connMysql;
