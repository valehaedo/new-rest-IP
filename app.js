const express = require ('express');
const app = express ();
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');
require ('dotenv/config');

//middlewars
app.use(cors());
app.use(bodyParser.json());

// import Routes

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('We are on home');
});

//conect to DB



mongoose.connect(
    process.env.DB_connection, 
    { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
        if (err) {
            console.log(err)
        }else{
            console.log('connected to DB')

        }
    });

//start listening the server

app.listen(3000);