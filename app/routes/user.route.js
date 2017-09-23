// create new file ./app/route/user.route.js
var user = require('../controllers/user.controller');

module.exports = (app) => {
       var path = '/api/user';

       app.get(path + '/getuser', user.getUsers);// get al users
       app.post(path + '/signup', user.create);
}