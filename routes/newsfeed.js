var express = require('express');
var router = express.Router(); //a new router object

var NewsfeedController = require('../controllers/newsfeed');

router.get('/', NewsfeedController.Index); //returning skeleton hbs
router.get('/posts', NewsfeedController.Posts); // <-- JSON returning ajax route
router.post('/create', NewsfeedController.Create);
module.exports = router; //exposes the newsfeed router to app.js
