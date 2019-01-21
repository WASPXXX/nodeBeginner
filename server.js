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

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        // var postData = "";
        if(request.url === '/favicon.ico') return; //处理自动请求
        console.log('Request for ' + pathname + ' received.');
        route(handle, pathname, response, request);
        // request.setEncoding("utf8");
        // request.addListener("data", function(postDataChunk) {
        //     postData += postDataChunk;
        //     console.log("Received POST data chunk '" + postDataChunk + "'.");
        // });
        // request.addListener("end", function() {
        //     route(handle, pathname, response, postData);
        // });
        // route(handle, pathname, response);
        // route(pathname);
        // route(handle, pathname);

        // response.writeHead(200, {'ContentType' : 'text/plain'});
        // var content = route(handle, pathname);
        // response.write('Hell0 W0rld');
        // response.write(content);
        // response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');  
}
//
exports.start = start;
