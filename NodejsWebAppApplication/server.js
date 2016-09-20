﻿var express = require('express');
var app = express();
var port = process.env.port || 1337;

app.use(express.static(__dirname));

app.all('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
        console.log('Minimal node express up and running on port ' + port);
});