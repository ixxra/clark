var static = require('node-static');

module.exports = function serve(){
    var file = new static.Server('./dist');
    require('http').createServer(function (request, response) {
        request.addListener('end', function () {
            file.serve(request, response);
        }).resume();
    }).listen(8082);
};
