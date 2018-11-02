var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tienda', { useNewUrlParser: true });

var products = [
  new Product({
    imagePath : 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title : 'videos geniales',
    description : 'muchos videos ............. ',
    price: 10
  }),
  new Product({
    imagePath : 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title : 'videos geniales',
    description : 'muchos videos ............. ',
    price: 20
  }),
  new Product({
    imagePath : 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title : 'videos geniales',
    description : 'muchos videos ............. ',
    price: 30
  }),
  new Product({
    imagePath : 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title : 'videos geniales',
    description : 'muchos videos ............. ',
    price: 40
  }),
  new Product({
    imagePath : 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title : 'videos geniales',
    description : 'muchos videos ............. ',
    price: 50
  }),
  new Product({
    imagePath : 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title : 'videos geniales',
    description : 'muchos videos ............. ',
    price: 60
  })
];

var done = 0;
for (var i =0; i < products.length; i++){
  products[i].save(function(err, result){
    done++;
    if(done === products.length){
      exit();
    }
  });
}
function exit(){
  mongoose.disconnect();
}
//
