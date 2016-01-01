/**
 * Created by anilkatta on 12/30/15.
 */

var AuthHandler = function() {};

AuthHandler.prototype.LocalSignIn = function(req, res, next) {
    console.log('Inside LocalSignIn');
    res.json({'status': 'inside local sign in'});
};

AuthHandler.prototype.GoogleSignIn = function(req, res, next) {
    
};

AuthHandler.prototype.FacebookSignIn = function(req, res, next) {
    
};

module.exports = new AuthHandler();