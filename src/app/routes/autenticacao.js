export default app => {
  app.post('/token', (req, res) =>
    new app.app.controllers.Autenticacao(app, req, res).autentica()
  );
};
