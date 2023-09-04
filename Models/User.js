const { Schema, Thoughts, User} = require('mongoose');
const User = mongoose.model('User', user);

const user = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        reference: Thoughts,
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        reference: User,
    }]
});

User.virtual('friendCount').get(function() {
    return this.friends.length;
});

module.exports = User;