const router = require('express').Router();
const api = require('./API/Index');

router.use('./', api);
module.exports = router;