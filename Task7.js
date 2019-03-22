/* *LearnYouNode Task 7 */

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
