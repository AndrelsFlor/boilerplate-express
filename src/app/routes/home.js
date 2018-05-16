export default app => {
  app.get('/', (req, res) =>
    new app.app.controllers.home(app, req, res).index()
  );
};
