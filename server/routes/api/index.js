

module.exports = function bootstrap(app){
  app.use('/api/', require('./upload'));
}
