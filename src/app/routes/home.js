export default (app) => {
  app.get('/', (req, res) => {
    app.app.controllers.home.index(app, req, res);
  });
};
