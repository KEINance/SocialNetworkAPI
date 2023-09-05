const { Schema, model } = require('mongoose');

const userSchema = new Schema({
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
        reference: "Thoughts",
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        reference: "User",
    }]
},
{
  toJSON: {
    getters: true
  },
  id: false
}
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;