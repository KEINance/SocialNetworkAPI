const { Schema, model} = require('mongoose');

const thoughtsSchema = new Schema({
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
    reactions: [{
        reactionBody: String,
        username: String,
        createdAt: Date
    }],
});

thoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});


const reactionsSchema = new Schema({
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal)
    },
});

reactionsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', thoughtsSchema);
const Reactions = model('Reactions', reactionsSchema);
module.exports ={ Thoughts, Reactions};
