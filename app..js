var express = require('express');

var app = new express();
var bodyParser= require ('body-parser');

app.use('/assets', express.static(__dirname + '/public/assets') );

app.set('view engine', 'ejs')

app.use(bodyParser.json())

var port = process.env.PORT || 1776;

app.get('/', function(req, res){

  res.render('index')
})

var products = [
  {
    id: 1,
    name: 'laptop'

  },

  {
    id: 2,
    name: 'printer'

  }


]

var currentId = 2;

app.get('/products', function(req, res){

  res.send({products: products});
})

app.post('/products', function(req, res){
    
  var name = req.body.name;
  currentId++;

  products.push({
    id: currentId,
    name: name
  })
  res.send('success')
})

app.listen(port);

