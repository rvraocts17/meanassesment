var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('hellow_world.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'application/json'});
		var jsonObj={
			name:venkat,
		    company:cts
		};
        
        res.end(JSON.stringify(jsonObj));
    });
}).listen(8000);