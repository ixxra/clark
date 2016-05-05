

module.exports = function bootstrap(app){
  app.use('/', require('./edit'));
  require('./api')(app);
}
