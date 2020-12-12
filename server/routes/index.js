const router = require('express').Router();
const todos = require('./todo.routes');

router.use('api/todo', todos)

module.exports = router;