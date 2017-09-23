import mongoose from 'mongoose';
import crypto from 'crypto';
var Schema = mongoose.Schema;

var UserSchema = new Schema({ //class schema
       firstName: String,
       lastName: String,
       username: { 
              type: String, 
              unique: true,//ห้ามซ้ำ ถ้ามีชื่อซ้ำจะerror
              required: 'Username is required',
              trim: true 
       },
       email: { type: String, unique: true },
       password: {
              type: String,
              required: 'Password is required',
              validate: [
                     (password) => { return password && password.length>=1; },
                     'Password cannot be empty'
              ]
       },
       created: {
              type: Date,
              default: Date.now
       },
       salt: { //ตัวที่เราrandomขึ้นมาเอาไปhashกับpassword ค่อนข้างunique
              type: String
       },
       provider: {
              type: String,
               default : 'local'
       },
       providerId: String,
       providerData: {}
}); 
    UserSchema.pre('save', function(next){
       if (this.password) {
              this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
              this.password = this.hashPassword(this.password);
       }
       next();
});

UserSchema.methods.hashPassword = function(password){
       return crypto.pbkdf2Sync(password, this.salt, 10000, 64,'sha512').toString('base64');
}

mongoose.model('User', UserSchema);


