const cool = require('cool-ascii-faces')
const express = require('express')
var bodyParser = require("body-parser");
const path = require('path')
const PORT = process.env.PORT || 5000
var file = require("./logic.js");

express()
  .use(bodyParser.urlencoded({extended: true}))
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/home', getData)
  .post('/calculate', calculate)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function getData(req, res){
    console.log('You are here!');
    var data = req.body;
    res.render('pages/home', { weight: "", type: ""});
  }
  
  function calculate(req, res){
    var data = req.body; 
    var test1 = file.test1(data.weight, data.type);
    console.log(test1);
    res.render('pages/price',{weight: data.weight, type: data.type});
    res.end();
  }