/* *LearnYouNode Task 13 */
var httpSrv = require('http');
var url = require('url');
var map = require('through2-map')
var server =  httpSrv.createServer(function(req,res){

  /*
  req.pipe(map(function(chank){
    return chank.toString().toUpperCase();
  })).pipe(res);
  */
  requestUrl = url.parse(req.url,true);
  var reqTime = requestUrl.query.iso;
  var date;
  var jsonDateObj
  if(requestUrl.pathname === "/api/parsetime"){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    date = new Date(reqTime);
    jsonDateObj = {hour : date.getHours() , minute: date.getMinutes() , second: date.getSeconds()}
    res.end(JSON.stringify(jsonDateObj));

  }
  if(requestUrl.pathname === "/api/unixtime"){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    date = new Date(reqTime);
    jsonDateObj = {unixtime: date.getTime()};
    res.end(JSON.stringify(jsonDateObj));
  }

});
server.listen(process.argv[2]);
