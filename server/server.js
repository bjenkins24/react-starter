require('./config/config');

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT;

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/*', function(req, res){
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(port, () => {
    console.log(`Started app on port ${port}`);
});

module.exports = {app};