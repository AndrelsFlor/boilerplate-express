export const index = (app, req, res) => {

  const connection = app.config.dbConnection();
  const testeModel = new app.app.models.TesteModel(connection);

  console.log('foi', testeModel);

  testeModel.getTeste((err, result) => {
    console.log(result);
  });
  console.log('teste');
  res.send('ok');

};
