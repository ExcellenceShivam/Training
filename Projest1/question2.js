const mongoose = require('mongoose');
const { profile, user } = require('./models')

const conn = async () => {
    mongoose.connect('mongodb://localhost:27017/nodeuser');

    const allAge = []

    const allUser = await user.find()

    allUser.forEach(element => {
        allAge.push(element.age)
        if (element.age > 25) {
            user.findByIdAndDelete({ _id: element._id }, (err) => {
                if (err) { console.log(err.messge) }
                console.log('Delete successful')
            })
        }
    })

    return allAge;
};

const avg = (arr) => {
    var total = 0;

    arr.forEach(element => {
        total += Number(element);
    });

    return total / arr.length
};

conn().then(arr => {
    allAvg = avg(arr);
    console.log(allAvg)
})
