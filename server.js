

var express = require('express');

var app = express();
var port = process.env.PORT || 8080;
app.listen(port);
app.get('*', function(req, res) {
        res.sendfile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
