function route(handle ,pathname, response, request) {
    console.log('About to route a request for ' + pathname);
    if (typeof(handle[pathname]) === 'function') {
        // handle[pathname]();
        // return handle[pathname]();
        handle[pathname](response, request);
    } else {
        console.log("No request handler found for " + pathname);
        // return "404 not found";
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 n0t found");
        response.end();
    }
}

exports.route = route;