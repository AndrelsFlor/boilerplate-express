class TesteModel {

  constructor(connection) {
    this.connection = connection;
  }
  getTeste(callback) {
    return this.connection.query('select * from Users', callback);
  }

}

export default () => {
  return TesteModel;
};
