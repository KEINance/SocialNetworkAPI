const express = require('express');
const router = express.Router();
const { Reactions } = require('../../Models')

// /api/thoughts/:thoughtId/reactions

// * `POST` to create a reaction stored in a single thought's `reactions` array field
router.post('/:thoughtId/reactions', (req, res) => {
    Reactions.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err))
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