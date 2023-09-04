const router = require('express').router();
const api = require('./API');

router.use('./api', api);
module.exports = router;