const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago', { useMongoClient: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//static path
app.use('/api', require('./routers/api'));

// Error handling middleware
app.use(function(err, req, res, next){
   //consloe.log(err);
   res.status(422).send({status: err.message});
})


//listen for requests
app.listen(3000, function(){
   console.log("Now listening for requests");
});

