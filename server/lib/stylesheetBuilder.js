var spawn = require('child_process').spawn;


module.exports = function builder(){
  spawn('sass', [
    '-I', 'client/lib/foundation/assets/scss',
    '--watch',
    'client/scss/main.scss:public/stylesheets/main.css']);
};
