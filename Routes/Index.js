const router = require('express').Router();
const api = require('./API');

router.use('./api', api);
module.exports = router;