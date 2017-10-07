
// create new file ./config/env/development.js (2)
// and ./config/env/production.js (3)
module.exports = {
     //  mongoUri: 'mongodb://localhost/myFirstNode',
       // or use 
        mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
       debug: true,
       sessionSecret: 'dev_secret_key',
           google: {
              clientID: '927689577868-lam9jqga3go1j9888ghv64tk5rb1aggr.apps.googleusercontent.com',
              clientSecret: 'qTf69PEAzelDdfGfjxnjZNoF',
              callbackURL: 'http://localhost:3000/oauth/google/callback'
       }
}