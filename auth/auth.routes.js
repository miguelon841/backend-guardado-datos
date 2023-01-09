const  Users = require('./auth.controller');
module.exports = (router) => {
    router.post('/saveUser', Users.saveUser);
    router.post('/getUser', Users.getUser);
}