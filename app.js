var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.json());

app.post('/',function(req,res){
  console.log(req.body);
  var date = new Date();
  var str = req.body.string;
  if(str === 'query'){
    res.status(400, 'Bad request');
    res.send( JSON.stringify({'status':'Msg rejected'}));
  }else{
    store = {string:str, time:date}
    fs.writeFile('store.txt', JSON.stringify(store), function(){
      console.log('written')
    });
    res.send(JSON.stringify(store));
  }
});

app.get('/query', function(req, res){
  console.log('query request recieved');
  // res.writeHead(200, {'Content-Type': 'application/json'});
  fs.readFile('store.txt', 'utf8', function(error, data){
    console.log(data)
    if (error) {
      res.writeHead(500, 'Rquest can not be complete due to server side error');
      res.send();
    }
    res.send(data);
  });
});

app.listen(3000);
