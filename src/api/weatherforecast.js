var axios = require('axios');
var express = require('express');
var logger = require('winston');
var router = express.Router();

router.get('/*', function (req, res) {
    axios({
        method: 'get',
        url: 'https://api.darksky.net/forecast/b1bd9cae7aafde055a766e2e7a22d808/47.5961,13.1678?units=auto',
        responseType: 'json',
    }).then(function (response) {
        res.status(response.status);
        res.send(response.data);
    }).catch(function (error) {
        logger.warn('Error requesting search to ' + req.path, error);
        res.status(500).send('Oops! Error sending to ' + req.path);
    });
});

module.exports = router;
