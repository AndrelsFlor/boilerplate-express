export default app => {
  app.get('/', (req, res) =>
    new app.app.controllers.home(app, req, res).index()
  );
};

//função que verifica o token
const verificaToken = (req, res, next) => {
  // pega o bearer
  const bearerHeader = req.headers['authorization'];

  // checa se o bearer é undefined
};
