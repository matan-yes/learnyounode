/* *LearnYouNode Task 13 */
/*
var httpSrv = require('http');
var url = require('url');
var map = require('through2-map')
var server =  httpSrv.createServer(function(req,res){


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
*/

/* *LearnYouNode Task 12 */
/*
var httpSrv = require('http');
var map = require('through2-map')
var server =  httpSrv.createServer(function(req,res){
  req.pipe(map(function(chank){
    return chank.toString().toUpperCase();
  })).pipe(res);

});
server.listen(process.argv[2]);
*/


/* *LearnYouNode Task 11 */
/*
var fs = require('fs');
var httpSrv = require('http');
var server =  httpSrv.createServer(function(req,res){
  var stream = fs.createReadStream(process.argv[3]);
  stream.pipe(res);

});
server.listen(process.argv[2]);
*/




/* *LearnYouNode Task 10 */
/*
var net = require('net');
var server  =  net.createServer(function(socket){
  var date = new Date();
  var month = date.getMonth();
  var day = date.getDate()
  if(month < 10)
    month = "0"+(month+1);
  if(day < 10)
    day = "0"+day;
  data = date.getFullYear()+"-"+month+"-"+day+" "+date.getHours()+":"+date.getMinutes()+ '\n'
  socket.write(data);
  socket.end();
});
server.listen(process.argv[2]);
*/





/* *LearnYouNode Task 9 */
/*
var http = require("http");
  var callbackCounter = 0;
  var collectedDataArray = []
  function httpGet(index){
  http.get(process.argv[2 + index], function(response){
    response.setEncoding('utf8');
    var collectedData = "";
    response.on('data',function(data){
        collectedData = collectedData + data;
    });
    response.on('error',function(error){
      console.log(error);
    });
    response.on('end',function(end){
      callbackCounter++;
      collectedDataArray[index] = collectedData;
      if(callbackCounter == 3){
        printCollectedData();
      }
    });
  });
  function printCollectedData(){
    collectedDataArray.forEach(function(data){
      console.log(data);
    });
  }
}
for (var i = 0; i < 3; i++) {
  httpGet(i);
}
*/





/* *LearnYouNode Task 8 */
/*
var http = require("http");
function collectDataFromURL(url){
  http.get(url,function(response){
    response.setEncoding('utf8');
    var collectedData = "";
    response.on('data',function(data){
        collectedData = collectedData + data;
    });
    response.on('error',function(error){
      console.log(error);
    });
    response.on('end',function(end){
      console.log(collectedData.length);
      console.log(collectedData);
    });
  }).on('error',console.error);
}
collectDataFromURL(process.argv[2]);
*/


/* *LearnYouNode Task 7 */
/*
var http = require('http');
function httpGet(url){
  http.get(url,function(response){
    var getData = [];
    response.setEncoding('utf8');
    response.on("data",function(data){
      console.log(data.toString());
    });
    response.on("error",function(error){
      console.log('error when perform get data');
    });
    response.on("end",function(end){
      if(end)
        return;
    });
  }).on('error',console.error);
};

var argurl = process.argv[2];
httpGet(argurl);
*/


/* *LearnYouNode Task 6 */
/*
var filterDirFiles = require('./filterFilesInDirByExtnName');
function printFilteredFiles(err,filesList){
  if(err){
    console.log("error");
    return;
  }
  for(var file in filesList){
    console.log(filesList[file]);
  }
}
filterDirFiles(process.argv[2],process.argv[3],printFilteredFiles);
*/
/* *LearnYouNode Task 5 */
/*
var fs = require('fs');
var path = require('path');
var fileNames = [];
function printDirFilesFilteredAsync(callback){
  var string = fs.readdir(process.argv[2],function(err,list){
    if(err == true){
      console.log("error");
    }
    else{
      for(var i =0 ; i< list.length;i++){
        if(path.extname(list[i]).toString() == ("." + process.argv[3])){
          fileNames.push(list[i]);
        }
      }
    }
    callback();
  });

};
function printFilteredFiles(){
  for(var file in fileNames){
    console.log(fileNames[file]);
  }
}
printDirFilesFilteredAsync(printFilteredFiles);
*/

/* *LearnYouNode Task 4 */
/*
var fs = require('fs');
var lineCount;
function countFileLinesAsync(callback){
  var string = fs.readFile(process.argv[2],'utf8',function(err,data){
      if (err != true) {
        lineCount = data.split('\n').length - 1;
      }
      else {
        console.log('error');
      }
      callback();
  });
};
function printLines(){
  console.log(lineCount);
}
countFileLinesAsync(printLines);
*/
