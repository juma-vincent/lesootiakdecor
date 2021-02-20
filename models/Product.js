const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
    name: String,
    imageurl: String,
    price: Number,
    category: String,
    created: Date,
    popularity : { type: String, default: 'moderate'}
    
});

mongoose.models('products', productSchema);