/* *LearnYouNode Task 6 */
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
