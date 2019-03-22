/* *LearnYouNode Task 11 */
var fs = require('fs');
var httpSrv = require('http');
var server =  httpSrv.createServer(function(req,res){
  var stream = fs.createReadStream(process.argv[3]);
  stream.pipe(res);

});
server.listen(process.argv[2]);
