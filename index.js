const cool = require('cool-ascii-faces')
const express = require('express')
var bodyParser = require("body-parser");
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(bodyParser.urlencoded({extended: true}))
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/home', getData)
  .post('/calculate', function calculate(req, res){
    console.log('you are in here actually');
    res.render('pages/price');
    res.end();
    // res.render('pages/price');
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  // function calculate(req, res){
  //   console.log('you are in here actually');
  //   res.render('pages/price');
  // }
  function getData(req, res){
    console.log('You are here!');
    res.render('pages/home');
  }