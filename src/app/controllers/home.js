class Home {
  constructor(app, req, res) {
    this.app = app;
    this.req = req;
    this.res = res;
  }

  index() {
    const connection = this.app.config.dbConnection();
    const testeModel = new this.app.app.models.TesteModel(connection);
    console.log('teste');

    testeModel.getTeste((err, result) => {
      console.log(result[0]);
    });

    this.res.send('ok');
  }
}

export default () => Home;
