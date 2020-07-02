//var app = express();
var config = require('../config.dev');
var Article = require('../models/articles');
var mongoose = require('mongoose');

mongoose.connect(config.mongodb, {useUnifiedTopology: true, useNewUrlParser: true });
//mongoose.connect('localhost:27017/mean-cms');

var articles = [
    new Article({
        title: 'My first article',
        description: 'description 1st article',
        slug: 'my first article',
        body: 'Body text here',
        keywords: 'keywords here',
        published: Date('Dec 12, 2014 14:12:00') 
    }),
         new Article({
        title: 'My second article',
        description: 'description 2st article',
        slug: 'my second article',
        body: 'Body text here',
        keywords: 'keywords here',
        published: Date('Dec 11, 2015 14:12:00') 
    })

];

var done = 0;
for (var i = 0; i < articles.length; i++) {
    articles[i].save(function(err, result) {
      done ++;
      if (done === articles.length) {
          exit();
        }  
    });
}

function exit() {
    mongoose.disconnect();
}