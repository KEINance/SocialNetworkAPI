const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const thoughtsRoutes = require('./ThoughtRoutes');
const reactionsRoutes = require('./ReactionsRoutes');

//remove . before / and change case on letters 

router.use('/user', userRoutes);
router.use('/thought', thoughtsRoutes);
router.use('/reactions', reactionsRoutes);

module.exports = router;
