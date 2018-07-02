"use strict";

const express = require('express'),
    app = module.exports = express(),
		fs = require('fs'),
    server = require('http').createServer(app),
    cors = require('cors'),
    path = require('path'),
    weatherforecast = require('./src/api/weatherforecast');


app.use(cors());

// use of static files
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/build')));
app.use('/vendor', express.static(__dirname + '/src/vendor'));
app.use('/js', express.static(__dirname + '/src/js'));

// weather api
app.use('/api/weatherforecast', weatherforecast);

// routing
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


// set our port
var port = process.env.PORT || 1337;
var server_ip_address = 'localhost';
var env = process.env.NODE_ENV || 'development';

// let server listen on port
app.listen(port, () => {
	console.log(`server running @ http://localhost:${port} in _${env}_ mode`);
});

console.log("\n$ *** SERVER SETUP *** $");
console.log("Magic happens on localhost:"+port);

// expose app
exports = module.exports = app;

module.exports =  {
    server: server,
    start: function() {
        server.listen(port);
    }
};
