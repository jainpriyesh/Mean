var express = require('express');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/mittens');
app.use(express.static('public'));

app.listen(2000, function () {
  console.log('Example app listening on port 2000!')
});



var Meow = mongoose.model('Meow',
  {
    text : String
  });

  app.get('/meows', function(req, res, next){
      Meow.find({}, function(err, meows){
        return res.json(meows);
      });
  });
  
app.post('/meows', function(req, res, next){	
		var newMeow = new Meow({
			text: req.body.newMeow		
		});
		newMeow.save(function(err){
			return res.send("Added Successfully");
	});	
	});



