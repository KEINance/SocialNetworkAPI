const { Schema, model } = require('mongoose');
function dateFormat(date) {
    return new Date(date).toLocaleDateString(); 
}

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
        get: (timestamp) => dateFormat(timestamp),
    },
},
{
  toJSON: {
    getters: true
  },
  id: false
}
);

const thoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionsSchema],
},
{
  toJSON: {
    getters: true
  },
  id: false
}
);

thoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', thoughtsSchema);
//const Reactions = model('Reactions', reactionsSchema);
module.exports ={ Thoughts };