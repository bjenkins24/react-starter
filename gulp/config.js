const argv = require('yargs').argv;

const PRODUCTION = argv.prod;
const WATCH = !!process.argv.find(function (s) { return s === 'watch'; }); // Are we watching?

// Necessary for production build of React
if (PRODUCTION) {
    process.env.NODE_ENV = 'production';
}

module.exports = {
    PRODUCTION,
    WATCH
};
