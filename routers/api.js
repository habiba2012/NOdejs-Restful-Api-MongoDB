const express = require('express');

const router = express.Router();
const Ninja = require('../models/ninja');

//Get a list of ninjas from a database
router.get('/ninjas', function(req,res,next){
  res.send({type:'GET'});
});

//Add a new ninja to the database
router.post('/ninjas', function(req,res,next){
     /*var ninja = new ninja(req.body);
    Ninja.create(req.body);*/
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
       }).catch(next);
});

//Eidt ninjas from database
router.put('/ninjas/:id', function(req,res,next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
           res.send(ninja);
        });
     
    });

});
//Delete ninjas from database
router.delete('/ninjas/:id', function(req,res,next){
    //console.log(req.params.id);
  Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
     res.send(ninja);
  });
  
});

module.exports = router;