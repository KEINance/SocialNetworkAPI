const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/social-network');

const connectionString = 'mongodb://127.0.0.1:27017/social-network';
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Success! You have connected!');
})
.catch((error) => {
    console.error('Could not connect', error);
});

module.exports = mongoose.connection;