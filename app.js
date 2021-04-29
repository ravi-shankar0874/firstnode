const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
   
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});
app.use('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    console.log('In the another  middleware');
    res.send('<h1>hello from express</h1>');
});
const server=http.createServer(app);

server.listen(3000);