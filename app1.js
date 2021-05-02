const http=require('http');
const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');
const expressHbs=require('express-handlebars');
const app=express();

app.set('view engine','pug');
app.set('views','views');
app.engine('handlebars',expressHbs);
const adminRoutes=require('./routes/admin');

const shopRouter=require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);

app.use(shopRouter);

app.use((req,res,next)=>{
    res.sendStatus(404).send('<h1> Page not found</h1>');

});
const server=http.createServer(app);

server.listen(3000);