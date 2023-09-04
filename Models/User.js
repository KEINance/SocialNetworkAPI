const { Schema, Thoughts, User} = require('mongoose');
const User = model('User', user);

const user = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: [
            /.+@.+\..+/, 'Must match a valid email address'
        ],
    },
    thoughts: [{ 
        type: Schema.Types.ObjectId,
        reference: Thoughts,
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        reference: User,
    }]
});

User.virtual('friendCount').get(function() {
    return this.friends.length;
});

module.exports = User;