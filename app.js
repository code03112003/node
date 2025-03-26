const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config({path:'./config.env'});
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());

//mongodb connection
mongoose.connect(process.env.MONGO_CONSTRING).then(() => console.log('mogodb connected')).catch(err => console.error(err));

//routes
const itemRoutes = require('./routes');
app.use('/items',itemRoutes);

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
});


