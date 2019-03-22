var fs = require('fs');
var path = require('path');

module.exports = function(dirName,filenameExtn,callback){
    var string = fs.readdir(dirName,function(err,list){
      if(err)
        return callback(err);//early return
      var fileNames = [];
      for(var i =0 ; i< list.length;i++){
        if(path.extname(list[i]).toString() == ("." + filenameExtn)){
            fileNames.push(list[i]);
          }
        }
      callback(null,fileNames);
    });
};
