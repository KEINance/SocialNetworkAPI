const expresss = require('express');
const { Thoughts } = require('../models')
// call -- /api/thoughts

// 'GET' to get all thoughts
router.get('/', (req, res) => {
  try {
    const thoughts = Thoughts.find();
    res.JSON(thoughts);
  } catch (err) {
    res.error('Thought could not be found :( ');
  }
})

// `GET` to get a single thought by its `_id`
router.get('/:id', (req, res) => {
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
  if (req.body.thoughtsIds.length) {
    const thoughtsArr = req.body.ThoughtsIds.map((thoughts_id) => {
      return {
        thoughtText: Thoughts.id,
        username,
        userid,
      }
    })
    return Thoughts.create(thoughtsArr);
  }
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
}) 
// PUT to update a thought by its _id
router.put('/:id', (req, res) => {
  Thoughts.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
})
// `DELETE` to remove a thought by its `_id`
router.delete('/:id', (req, res) => {
  Thoughts.destroy({
    where:{ 
      id: req.params.id,
    }})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err))
});

module.exports = router;