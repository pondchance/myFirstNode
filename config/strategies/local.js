// create new file ./config/strategies/local.js
import passport from 'passport';
import localStratege from 'passport-local';
var LocalStratege = localStratege.Strategy;
var User = require('mongoose').model('User');

module.exports = () => { 
       passport.use(new LocalStratege((username, password, done) => { //รับเป็นuser , password เข้ามา
              User.findOne({ username: username }, (err, user) => { //เช็คว่ามีมั้ยuser,pass
                     if (err) { return done(err); }
                     if (!user || user.provider!='local' || !user.authenticate(password)) {//
                            return done('Invalid username or password');//ถ้าไม่มี จะมาทำส่วนนี้ provider ต้หฆองเป็นlocal user.authenticateคือเช็คว่าถึงมีuserจริงแต่passถูกมั้ย
                     } //เอาuserไปหาในดาต้าเบส ถ้ามีก็returnกลับมา ไม่มีก็errกลับไป
                     return done(null, user);
              });
       }));
}