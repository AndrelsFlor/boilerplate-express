import verificaToken from './../middlewares/VerificaToken';
export default app => {
  // const verificaToken = app.app.middlewares.VerificaToken();

  app.get('/', verificaToken(), (req, res) =>
    new app.app.controllers.home(app, req, res).index()
  );
};
