const express = require('express');
const router = express.Router();
const { Thoughts, Reactions } = require('../../Models/Thought')
// call -- /api/thought

// 'GET' to get all thought
router.get('/', async (req, res) => {
  try {
    // Add query criteria here if needed
    const data = await Thoughts.find();

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// `GET` to get a single thought by its `_id`
router.get('/:thoughtId', async (req, res) => {
  Thoughts.findOne({
    _id: req.params.thoughtId,
  })
.then(data => res.status(200).json(data))
.catch(err => res.status(400).json(err))
});

// `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
router.post('/', async (req, res) => {
  try {
      await Thoughts.create(req.body); 
      res.status(201).json({ message: 'Thoughts created successfully' });
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});


// PUT to update a thought by its _id
router.put('/:thoughtId', async (req, res) => {
  await Thoughts.findOneAndUpdate({ _id: req.params.thoughtId }, {$set: req.body}, {new: true})
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
})
// `DELETE` to remove a thought by its `_id`
router.delete('/:thoughtId', async (req, res) => {
  await Thoughts.findOneAndDelete({
      _id: req.params.thoughtId,
    })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err))
});

// REACTION PORTION
// /api/thoughts/:thoughtId/reactions

// * `POST` to create a reaction stored in a single thought's `reactions` array field
router.post('/:thoughtId/reactions', async (req, res) => {
  try {
    await Thoughts.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body } }, { runValidators: true, new: true });
    res.status(201).json({ message: 'Reactions created successfully' });
  } catch (err) {
  console.error(err);
  res.status(500).json({ error: 'An error occurred with your reaction' });
}
})

// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
  // console.log('hellothoughtdelete')
  await Thoughts.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { _id: req.params.reactionId } } }, {new: true })
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
})



module.exports = router;
