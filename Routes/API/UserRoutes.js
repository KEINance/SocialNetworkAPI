const express = require('express');
const User = require('../../Models/User');
const { Thoughts } = require('../../Models/Thought')
const router = express.Router();

// call by /api/users

// `GET` all users
router.get('/', (req, res) => {
  User.find()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
})
// `GET` a single user by its `_id` and populated thought and friend data
router.get('/:userId', (req, res) => {
  User.findOne({
      _id: req.params.userId,
    })
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
});

// `POST` a new user:
// example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
router.post('/', (req, res) => {
  User.create(req.body)
  .then((User) => {
    res.json(User)
  })
    .catch(err => res.status(400).json(err))
});

// * `PUT` to update a user by its `_id`
router.put('/:userId', (req, res) => {
  User.findOneAndUpdate({ _id: req.params.userId }, {$set: req.body}, {new: true})
  .then((User) => {
    res.json(User)
  })
    .catch(err => res.status(400).json(err))
})

// * `DELETE` to remove user by its `_id`
router.delete('/:userId', (req, res) => {
  // delete on tag by its `id` value
  User.findOneAndDelete(req.body)
  .then((User) => {
    res.json(User)
  })

    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err))
});

// **BONUS**: Remove a user's associated thoughts when deleted.


// `/api/users/:userId/friends/:friendId`
// `POST` to add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', (req, res) => {
  User.create(req.friends.body)
  .then((User) => {
    const userArr = req.body.userIds.map((userId) => {
      return {
        userId: friend.id,
      }
      return User.create(userArr);
  })
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).json(err))
})
});

// * `DELETE` to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', (req, res) => {
  User.findOneAndDelete({
    where: {
      id: req.params.friends.id,
    }})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err))
});

module.exports = router;