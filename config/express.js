// create new file ./config/express.js
//จัดการเกี่ยวกับexpress
import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
//import all modules
module.exports = function() {
const app = express(); //เอาexpressมาใช้งาน

if (process.env.NODE_ENV === "development") {
app.use(morgan('dev'));
}
else {
app.use(compression());
}

app.use(bodyParser.json()); //อ่านตัวบอดี้

require('../app/routes/index.route')(app); //import ตัวจัดการrouting ต้องอยู่หลัง app.use ทั้งหมด


return app;
}