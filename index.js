const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const app = express();


require('./models/Product');
require('./models/Category');


mongoose.connect(keys.mongoURI)
console.log(keys);
app.use(bodyParser.json());

require('./routes/productRoutes')(app);


if(process.env.NODE_ENV === 'production'){
    //Express will serve up production assets like our main.js or main.css
    app.use(express.static('client/build'));
 
    //Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);
