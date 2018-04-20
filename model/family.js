const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const baseConfig = {
    discriminatorKey: "_type", //If you've got a lot of different data types, you could also consider setting up a secondary index here.
    collection: "alldata"
}

const commonModel = mongoose.model('Common', new mongoose.Schema({}, baseConfig));

const Family_common = commonModel.discriminator('FamilyType', new mongoose.Schema({
    lastName: String,
    parents: [{
        familyName: String,
        firstName: String,
        gender: String
    }],
    children: [{
        familyName: String,
        firstName: String,
        gender: String,
        grade: Number
    }],
    pets:[{
        givenName: String
    }],
    address: {
        country: String,
        state: String,
        city: String
    }
}, baseConfig));

const Vacation_common = commonModel.discriminator('VacationDestinationsType', new mongoose.Schema({
    name: String,
    country: String
}, baseConfig));

// const Parent_common = mongoose.model('ParentType', new mongoose.Schema({
//     familyName: String,
//     firstName: String,
//     gender: String
// }, baseConfig));

// const Child_common = mongoose.model('ChildType', new mongoose.Schema({
//     familyName: String,
//     firstName: String,
//     gender: String,
//     grade: Number
// }, baseConfig));


module.exports = commonModel;
