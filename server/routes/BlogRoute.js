const express = require('express');
const BlogModel = require('../models/BlogModel');
const router = express.Router();


router.get('/blogs/all', async (req, res, next) => {
    try {
        const blogs = await BlogModel.find();
        res.json(blogs);
    } catch (err) {
        res.json(`Error in fetching blogs, ${err}`);
    };
})

router.get('/blog/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const blog = await BlogModel.findById(id);
        res.json(blog);
    } catch (err) {
        res.json(`There was an error in fetching blog ${err}`);
    }
})

router.post('/blog/add', async (req, res, next) => {
    const { title, content, time, date, img } = req.body;

    try {
        const blogAdded = await BlogModel.create({
            title: title,
            content: content,
            time: time,
            date: date,
            img: img
        });
        console.log(blogAdded);
        res.json(blogAdded);

    } catch (err) {
        console.log(err);
        res.json('Error', err);
    }
});


router.patch('/blog/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content, date, time, img } = req.body;

    const updateFields = {};
    if (title) updateFields.title = title;
    if (content) updateFields.content = content;
    if (date) updateFields.date = date;
    if (time) updateFields.time = time;
    if (img) updateFields.img = img

    try {
        const response = await BlogModel.findByIdAndUpdate(id,updateFields, {new: true});
        
        console.log(response);
        res.json(response);
    } catch (error) {
        res.json(`Error while updating ${err}`);
    }
})


router.delete('/blog/remove', async (req, res, next) => {
    const { title, date } = req.body;
    try {
        const response = await BlogModel.deleteOne({
            title,
            date
        });
        console.log(response);
        res.json(`Deleted Successfully! ${response}`);
        
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});


module.exports = router;