var router = require('express').Router();
var fs = require('fs');


router.post('/cache/images', function(req, res, next) {
    console.log('IN', req.files);
     var targetName = 'image.jpg';
     var tempPath = req.files.file.path;
     //get the mime type of the file
     var type = mime.lookup(req.files.file.path);
     //get the extension of the file
     var extension = req.files.file.path.split(/[. ]+/).pop();

     console.log(targetName, tempPath, type, extension);

     var is = fs.createReadStream(tempPath);
     var os = fs.createWriteStream(targetName);

     is.pipe(os);

     //handle error
     is.on('error', function() {
       if (err) {
         return res.send(500, 'Something went wrong');
       }
     });

     //if we are done moving the file
     is.on('end', function() {

       //delete file from temp folder
       fs.unlink(tempName, function(err) {
         if (err) {
           return res.send(500, 'Something went wrong');
         }

         console.log(tempName);
         console.log(targetName);

         //send something nice to user
         res.render('image', {
           name: targetName,
           type: type,
           extension: extension
         });


       });//#end - unlink
     });//#end - on.end

/*  var data = new Buffer('');
  req.on('data',function(chunk){data = Buffer.concat([data, chunk])});
  req.on('end', function(){
    var stream = fs.createWriteStream('image.jpg');
    stream.write(data);
    stream.end();
    console.log('done')
    res.send('OK');
  });
//  var buf = new Buffer(req.body.image.toString('binary'), 'binary');
*/
});

module.exports = router;
