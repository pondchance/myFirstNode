/*var express= require('express');
var app= express();
var bodyParser = require('body-parser');
app.set('num', 1);
var num = app.get('num');
     console.log(num); //1

     app.use(function(req, res, next) { //.use ถูกทำทุุกครั้งเมื่อมีการ request
     console.log('Record timestamp');
        next(); //ทำฟังก์ชั่นถัดไป middle ware
    });

  app.use(bodyParser.json()); //ที่ใช้.json because อ่านbodyประเภท json 

    app.post('/', function(req, res, next) {
       var body=  req.body; //create var body
       var x = body.x;
       var  y = body.y;
       var result = 0;
       var obj = {
           "x": x,
           "y": y,
           "result": x + y
       }
     res.json(obj); // if  เอา.a ออก จะโชว์body เป็น objนึง 
    });
app.get('/help', function(req, res, next) {
      res.send('Help me');
   }); // get2อันบน การทำrounting
app.listen(3000,function(){
    console.log('Starting node on port'); //ให้express start อยู่ที่port3000
});
add to file ./index.js*/
import express from './config/express';


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;

var app = express();//call function express 

app.listen(process.env.PORT, () => {
       console.log('Starting node.js on port ' + process.env.PORT);
});

module.exports = app; //เราexpo
