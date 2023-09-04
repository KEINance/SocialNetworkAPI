const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const thoughtRoutes = require('./ThoughtRoutes');
const reactionsRoutes = require('./ReactionsRoutes');

router.use('./User', userRoutes);
router.use('./Thought', thoughtRoutes);
router.use('./Reactions', reactionsRoutes);

module.exports = router;
