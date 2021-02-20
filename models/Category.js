const mongoose = require('mongoose');
const { Schema } = mongoose;


const categorySchema = new Schema({
    name: String,
    imageurl: String,
})
 
mongoose.models('categories', categorySchema);