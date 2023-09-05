const express = require('express');
const router = express.Router();
const { Thoughts } = require('../../Models/Thought')
// call -- /api/thought

// 'GET' to get all thought
router.get('/', (req, res) => {
  try {
    const thoughts = Thoughts.find();
    res.json(thoughts);
  } catch (err) {
    console.error('Thought could not be found :( ');
  }
})

// `GET` to get a single thought by its `_id`
router.get('/:thoughtId', (req, res) => {
  try {
    const thoughts = Thoughts.findOne({ _id: req.params.thoughtId});
    res.json(thoughts);
  } catch (err) {
    console.error('Thought could not be found :( ');
  }
})
// `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
router.post('/', async (req, res) => {
  try {
      // const thoughtsArr = req.body.thoughtsIds.map((thoughts_id) => {
      //   return {
      //     thoughtText: Thoughts.id,
      //     username,
      //     userid,
      //   };
      
      await Thoughts.create(req.body); // Use bulkCreate for multiple inserts.
      res.status(201).json({ message: 'Thoughts created successfully' });
      res.status(400).json({ error: 'No thought IDs provided' });
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});






// PUT to update a thought by its _id
router.put('/:thoughtId', (req, res) => {
  Thoughts.findOneAndUpdate({ _id: req.params.thoughtId }, {$set: req.body}, {new: true})
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
})
// `DELETE` to remove a thought by its `_id`
router.delete('/:thoughtId', (req, res) => {
  Thoughts.findOneAndDelete({
      _id: req.params.thoughtId,
    })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err))
});

// REACTION PORTION
// /api/thoughts/:thoughtId/reactions

// * `POST` to create a reaction stored in a single thought's `reactions` array field
router.post('/:thoughtId/reactions', (req, res) => {
  try {
    if (req.body.reactionsIds.length) {
    const reactionsArr = req.body.reactionsIds.map((thoughts_id) => {
      return {
        reactionBody: Thoughts.id,
        username,
        createdAt,
      }
    return Thoughts.create(reactionsArr);
    })}
  } catch (err) {
  console.error('Thought could not be found :( ');
}
})


// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
router.delete('/reactionId', (req, res) => {
  Reactions.findOneAndDelete({
      where: {
          id: req.params.id
      }
  })
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
})



module.exports = router;
