const mongoose = require('mongoose');
const Product = mongoose.model('products');
const Category = mongoose.model('categories');

module.exports = (app)=>{
    app.get('/api/all_products', async (req, res)=>{
        const allProducts =  await Product.find({})
        res.send(allProducts);

    })

    app.post('/api/filter_product_by_category', async (req, res)=>{
         const { categoryName } = req.body;
         const categoryProducts = await Product.find({ category: categoryName });
         res.send(categoryProducts);
    })

    app.post('/api/new_product', async (req, res)=>{
        const { name, imageurl, price, category, subcategory } = req.body;        
        
        await new Product({
            name,
            imageurl,
            price,
            category,
            subcategory
        }).save()

        res.send('success');
    })

    app.post('/api/new_category', async(req, res)=>{        

        const { name, imageurl } = req.body;

        await new Category({
            name,
            imageurl
        }).save()

        res.send('success');
    })

}