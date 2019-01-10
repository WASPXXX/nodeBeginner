var http = require('http');
var url = require('url');
// http.createServer(function(request, response) {
//     response.writeHead(200, {'ContentType' : 'text/plain'});
//     response.write('Hell0 W0rld');
//     response.end();
// }).listen(8888);


// function onRequest(request, response) {
//     console.log('Request received.');
//     response.writeHead(200, {'ContentType' : 'text/plain'});
//     response.write('Hell0 W0rld');
//     response.end();
// }

// http.createServer(onRequest).listen(8888);
// console.log('Server has started.');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        
        if(request.url === '/favicon.ico') return; //处理自动请求

        console.log('Request for ' + pathname + ' received.');
        route(pathname);
        response.writeHead(200, {'ContentType' : 'text/plain'});
        response.write('Hell0 W0rld');
        response.end();
    }
    
    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');  
}

exports.start = start;
