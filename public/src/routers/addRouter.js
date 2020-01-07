var express=require('express');
var { detailsModel } =require('../models/dataModel');
var router = express.Router();

router.post('/add', (req, res)=>{
    console.log('Hit', req.body);
    var person=new detailsModel(req.body);
        person.save((err,result)=>{
            if(err){
                res.json({status:"error"});
            }
            else{
                console.log("back end works");
                res.json({status:"success"});
            }
        });
});

// router.get('/welcome', (req, res)=>{
// res.json('Hi welcome');
// });
router.get('/get',(req,res)=>{
    console.log("its getting.............rock");
    var person=new detailsModel(req.body);
    detailsModel.find((err,result)=>{
        if(err){
            console.log(err);
        }
        res.json(result);
        console.log(result);
    })
})
module.exports=router;