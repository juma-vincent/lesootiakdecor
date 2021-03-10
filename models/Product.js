const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
    name: String,
    imageurl: String,
    price: Number,
    setprice: String,
    set: String,
    category: String,
    subcategory: String,
    created: Date,
    popularity : { type: String, default: 'moderate'}
    
});

mongoose.model('products', productSchema);