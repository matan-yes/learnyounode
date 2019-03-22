/* *LearnYouNode Task 4 */
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
