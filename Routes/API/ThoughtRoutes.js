const express = require('express');
const router = express.Router();
const { Thoughts } = require('../../Models')
// call -- /api/thoughts

// 'GET' to get all thoughts
router.get('/:id', (req, res) => {
  try {
    const thoughts = Thoughts.find();
    res.JSON(thoughts);
  } catch (err) {
    res.error('Thought could not be found :( ');
  }
})

// `GET` to get a single thought by its `_id`
router.get('/:userid', (req, res) => {
  try {
    const thoughts = Thoughts.find(thoughts.id);
    res.JSON(thoughts);
  } catch (err) {
    res.error('Thought could not be found :( ');
  }
})
// `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
router.post('/', (req, res) => {
  try {if (req.body.thoughtsIds.length) {
    const thoughtsArr = req.body.ThoughtsIds.map((thoughts_id) => {
      return {
        thoughtText: Thoughts.id,
        username,
        userid,
      }
    })
    return Thoughts.create(thoughtsArr);
  }
}  catch (err) {
  res.error('Thought could not be found :( ');
}
})
// PUT to update a thought by its _id
router.put('/:userid', (req, res) => {
  Thoughts.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
})
// `DELETE` to remove a thought by its `_id`
router.delete('/:userid', (req, res) => {
  Thoughts.destroy({
    where:{ 
      id: req.params.id,
    }})
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
  res.error('Thought could not be found :( ');
}
})


// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
router.delete('/reactionId', (req, res) => {
  Reactions.destroy({
      where: {
          id: req.params.id
      }
  })
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
})



module.exports = router;
