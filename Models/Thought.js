const { Schema, Thought, User} = require('mongoose');
const Thought = model('Thought', thought);

const thought = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reaction],

});

Thought.virtual('reactionCount').get(function() {
    return this.reaction.length;
});

module.exports = Thought;
