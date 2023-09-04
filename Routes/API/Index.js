const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const thoughtsRoutes = require('./ThoughtRoutes');
const reactionsRoutes = require('./ReactionsRoutes');

router.use('./User', userRoutes);
router.use('./Thought', thoughtsRoutes);
router.use('./Reactions', reactionsRoutes);

module.exports = router;
