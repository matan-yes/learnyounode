/* *LearnYouNode Task 8 */

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
