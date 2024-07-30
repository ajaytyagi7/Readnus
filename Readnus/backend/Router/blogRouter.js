const express = require('express');
const Model = require('../Model/blogModel');

const router=express.Router();

router.post('/add',(req,res) =>{
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err)
        
    });
});

router.get('/getall',(req,res) => {


    Model.find()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
});

router.get('/getbyid/:id',(req,res) =>{
    
    Model.findById(req.params.id).populate('write')
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(500).json(err) 
    });
});




    router.delete('/delete/:id', (req, res) => {
        Model.findByIdAndDelete(req.params.id)
        .then((result) => {
          res.json(result);
         }).catch((err) => {
         
         res.status(500).json(err);
       });
      });

    module.exports=router