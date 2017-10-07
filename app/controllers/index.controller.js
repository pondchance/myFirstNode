// create new file ./app/controllers/index.controller.js
/*exports.index = (req, res) => {
    res.send('Hello World');
}*/

var path = require("path"); //รีควายพาร์ทเข้ามา



exports.index = (req, res) => {
       res.sendFile((path.join(__dirname + '/../views/index.html')));
}

exports.help = (req, res) => {
    res.send('Help me');
}

exports.home = (req, res) => {
       if (req.user) {
            res.render((path.join(__dirname + '/../views/home.html')), { username: req.user.username });
       }
       else {
              res.status(400).send({ message: 'User is not signed in' });
       }
}











