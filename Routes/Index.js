const router = require('express').Router();
const api = require('./API');

// nix . before / and add 'api' after



router.use('/api', api);
module.exports = router;