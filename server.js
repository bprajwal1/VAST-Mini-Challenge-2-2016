var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port);

console.log('Listening on port: ' + port);
