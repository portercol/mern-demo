const router = require('express').Router();
const { Todo } = require('../models');

router 
    .route('/')
    .get((req, res) => {
        Todo.find({})
        .then(data => {
            console.log({ data });
            res.json({ success: true, data })
        })
        .catch(err => {
            console.log({ err });
            res.json({ success: false })
        })
    })
    .post((req, res) => {
        console.log({ reqBody: req.body });
        Todo.create({
            text: req.body.text
        })
        .then(data => {
            console.log({ data });
            res.json({ success: true, data })
        })
        .catch(err => {
            console.log({ err });
            res.json({ success: false })
        })
    });

router
    .route('/:id')
    .delete((req, res) => {
        console.log(req.params);
        Todo
        .findByIdAndDelete(req.params.id)
        .then(data => {
            console.log({ data })
            res.json({ success: true })
        })
        .catch(err => {
            res.json({ success: false })
        })
    });
    
module.exports = router;
