const expres = require('express');
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: String,
    time: String,
    img: String
});

const BlogModel = mongoose.model('blog', blogSchema);

module.exports = BlogModel;