var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send({ message: 'at API' });
    req.send(req.body);
});

router.post('/data', function (req, res, next) {
    console.log(req.body);
    res.send(req.body);
})

module.exports = router;