var fs = require('fs');
var http = require('http');

fs.readFile('index.html', function(err, input){
  http.createServer(function(request, response){
    response.writeHead(200);
    response.write(input);
    response.end;
  }).listen(3000, function(){
      console.log('server started')
    });
})