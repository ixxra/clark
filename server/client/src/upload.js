//function sendToServer(binaryString){
function sendToServer(file){
  var req = new XMLHttpRequest();
  req.addEventListener('load', function(){
    console.log('loaded');
  });
  req.addEventListener('error', function(){
    console.log('error');
  });

  req.open('post', '/api/cache/images/');
  var data = new FormData();
  //data.append('image', binaryString);
  console.log('file:', file)
  data.append('image', file);
  req.send(data);
}

document.getElementById('uploader').addEventListener('change', function(evt){
  var files = this.files;
  for (var i = 0; i < files.length; i++){
    sendToServer(files[i]);
//    var reader = new FileReader();
//    reader.addEventListener("loadend", function(){
//      sendToServer(this.result);
//    });
//    reader.readAsBinaryString(files[i]);
  }
});
