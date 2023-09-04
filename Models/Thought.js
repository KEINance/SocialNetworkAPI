const { Schema, Thoughts, User} = require('mongoose');
const Thoughts = model('Thoughts', thoughts);

const thoughts = new Schema({
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

Thoughts.virtual('reactionCount').get(function() {
    return this.reaction.length;
});

module.exports = Thoughts;
