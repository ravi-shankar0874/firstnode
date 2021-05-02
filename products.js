exports.getAddProduct=(req,res,next)=>{
    res.render('add-product',{
        pageTitle:'Add product',
        path:'/admin/add-product',
        formCSS:true,
        productCSS:true,
        activeAddProduct:true
    });
};

exports.postAddProduct=(req,res,next)=>{
    products.push({title:req.body.title});
    res.redirect('/');
};

exports.getProducts=(req,res,next)=>{
    const products=adminData.products;
    res.render('shop',{
        prods:products,
    pageTitle:'shop',
        path:'/',
        hasProducts:products.length>0,
        activeShop:true,
        productCss:true
    });
}