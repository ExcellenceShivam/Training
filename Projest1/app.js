const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {profile,user} = require('./models')
const data = require('./Data.json');

const conn = async (data) => {
    await mongoose.connect('mongodb://localhost:27017/nodeuser');

    const newUser = new user({
        first_name: data.first_name,
        last_name: data.last_name,
        age: data.age,
        email: data.email,
        password: data.password,
    });

    const newProfile = new profile({
        user_id: newUser._id,
        dob: data.dob,
        mobile_no: data.mobile_no,
    })

    await newUser.save().then(() => console.log(newUser));
    await newProfile.save().then(() => console.log(newProfile))
};

for (const d of data) {
    bcrypt.hash(d.password, 10).then(hash => {
        d.password = hash
    conn(d);
    });
};
