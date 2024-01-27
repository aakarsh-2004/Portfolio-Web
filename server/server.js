const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const UserRoute = require('./routes/UserRoute');
const BlogRoute = require('./routes/BlogRoute');


const PORT = 5050;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({credentials: true, origin: 'http://localhost:3000/'}));
dotenv.config();

// DB();

mongoose
    .connect(process.env.URI)
    .then(() => {
        console.log(`Successfully connected to the database`);
        app.listen(PORT, () => {
            console.log(`Server started successfully on server ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(`Error while connecting to the database`, err);
    })


app.use('/', UserRoute);
app.use('/', BlogRoute)