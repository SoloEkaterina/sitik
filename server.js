//simple server for sending html pages
//with nodejs



var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8082, function(){
    console.log('Server running on 8082...');
});
