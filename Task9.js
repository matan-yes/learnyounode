/* *LearnYouNode Task 9 */

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
