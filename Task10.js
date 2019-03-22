/* *LearnYouNode Task 10 */
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
