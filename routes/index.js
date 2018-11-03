var express = require('express');
var router = express.Router();
var Product =require('../models/product');
var Cart =require('../models/cart');

var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);
/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i = 0; i<docs.length; i += chunkSize){
      productChunks.push(docs.slice(i, i+chunkSize));
    }
    res.render('shop/index', { title: 'tiendaen linea', products: productChunks });
  });

});
router.get('/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product){
    if(err){
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  });
});

router.get('/shopping-cart', function(req, res, next){
  if(!req.session.cart){
    return res.render('shop/shopping-cart', {products: null});
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});





/*USUARIO */
router.get('/user/signup', function(req, res, next){
  res.render('user/signup', {csrfToken : req.csrfToken()});
});
router.post('/user/signup', function(req, res, next){
  res.redirect('/');
});
module.exports = router;
