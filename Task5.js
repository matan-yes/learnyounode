/* *LearnYouNode Task 5 */
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
