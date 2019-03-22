/* *LearnYouNode Task 12 */
var httpSrv = require('http');
var map = require('through2-map')
var server =  httpSrv.createServer(function(req,res){
  req.pipe(map(function(chank){
    return chank.toString().toUpperCase();
  })).pipe(res);

});
server.listen(process.argv[2]);
