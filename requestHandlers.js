var exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called");
    // function sleep(milliSeconds) {
    //     var startTime = new Date().getTime();
    //     while(new Date().getTime() < startTime + milliSeconds);
    // }
    // sleep(10000);
    // return "hell0 start";
    // var content = "empty";
    // exec("ls -lah", function(error, stdout, stderr) {
    //     response.writeHead(200, {"Content-Type": "text/plain"});
    //     response.write(stdout);
    //     response.end();
    // });
    exec("find /", { timeout:10000, maxBuffer: 20000*1024}, function(error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });
    // return content;
}

function upload(response) {
    console.log("Request handler 'upload' was called");
    // return "hell0 upload";
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("hell0 upload");
    response.end();
}

exports.start = start;
exports.upload = upload;