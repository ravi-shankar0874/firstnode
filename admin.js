const express=require('express');
const router=express.Router();
const products=[];
router.get('/add-product',(req,res,next)=>{
   
    res.render('add-product',{pageTitle:'Add product'});
});

router.post('/add-product',(req,res)=>{
    console.log(req.body);
    products.push({title:req.body.title});
    res.redirect('/');
});

module.exports=router;