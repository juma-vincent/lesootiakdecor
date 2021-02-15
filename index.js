const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Hi Lesootia. This is your new website.')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);