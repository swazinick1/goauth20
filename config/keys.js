// keys.js figure out what set of creds to return??

module.exports = {
    googleClientID: '335509474849-0f3gvq8nkj9fsivs3tle7802j4pf6p0l.apps.googleusercontent.com',
    googleClientSecret: 't78o1ti0B4k5_4pKokbDtlfQ',
    mongoURI: 'mongodb://swazinick1:Single420@ds229732.mlab.com:29732/logins',
    cookieKey: 'hjsdhfjasdhflakdsh'
};

// if (process.env.NODE_ENV === 'production') {
//     // we are in production - return the prod est of keys
//     module.exports = require('./prod');
// } else {
//     // we are in development - return the dev keys!!!
//     module.exports = require('./dev');
// }