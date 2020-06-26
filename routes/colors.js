var express = require('express');
var router = express.Router();
var response = '';
TextDecoderStream;
//GET topmost resource
router.get('/', function(req, res, next) {
    response = 'All colors are : ';
    next(); //next() passes the control back to router to execute next function
            //res.send(response) ends the req-res cycle;
});

router.get('/', function(req, res, next) {
    response = response + 'Red, Green and Blue';
    res.render('colors', { colors: ['red', 'green', 'blue']});
    //res.send(response);
});


module.exports = router;
