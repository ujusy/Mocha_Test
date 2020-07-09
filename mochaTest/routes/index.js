var express = require('express');
var router = express.Router();

router.use('/member', require('./member'));

module.exports = router;
