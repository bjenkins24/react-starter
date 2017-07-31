const express = require('express');

const app = express();
const port = 3001;

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Started app on port ${port}`);
});

module.exports = {app};