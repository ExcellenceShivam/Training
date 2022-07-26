const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    age: String,
    email: String,
    password: String,
});

const profileSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    dob: String,
    mobile_no: String,
});

const user = mongoose.model('user', userSchema);
const profile = mongoose.model('profile', profileSchema);

module.exports = { user, profile }