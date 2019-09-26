
var fs = require('fs');
fs.readFile('hello_world.html',
   
    function(err, data) { 
        if (err) throw err;
        // data is a buffer containing file content
        console.log(data.toString('utf8'))
});