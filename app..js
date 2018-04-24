var express = require('express');

var app = new express();


app.use('/assets', express.static(__dirname + '/public/assets') );

app.set('view engine', 'ejs')

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

app.get('/products', function(req, res){

  res.send({products: products});
})

app.listen(port);

