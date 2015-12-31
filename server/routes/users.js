var express = require('express');
var router = express.Router();
var AuthHandler = require('../handlers/AuthHandler');

/* GET users listing. */
// router.get('/login', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/login', function(req, res, next) {
    AuthHandler.LocalSignIn(req, res, next);
});

router.get('/login', function(req, res, next){
    AuthHandler.LocalSignIn(req, res, next);
});

module.exports = router;
