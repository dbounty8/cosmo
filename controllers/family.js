const commonModel = require('../model/family.js');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
//const Vacation_common = require('../model/family.js');

exports.post = (req, res) => {
  const parent = new Parent( req.body );
  
  parent.save((err, parentCreated) => {
    res.json(parentCreated);
  });
};

// exports.post = (req, res) => {
//   const family = new Family({
//     lastName: req.body.lastName,
//     parents: [
//         { firstName: "Thomas" },
//         { firstName: "Mary Kay" }
//     ],
//     children: [
//         { firstName: "Ryan", gender: "male", grade: 8 },
//         { firstName: "Patrick", gender: "male", grade: 7 }
//     ],
//     pets: [
//         { givenName: "Blackie" }
//     ],
//     address: { country: "USA", state: "WA", city: "Seattle" }
// });

//   Family.save((err, FamilyCreated) => {
//     res.json(FamilyCreated);
//   });
// };

exports.list = (req, res) => {
  commonModel.find({}, (err, listFamily) => {
    if (err) {
      res.json('Something went wrong');
    }
    res.json(listFamily);
    });
};

exports.get = (req, res) => {
    commonModel.find( {"children.gender": req.params.gender }, { "parents._id": 1, "parents.firstName": 1 }, (err, foundFamily) => {
    //foundFamily.forEach(fam => console.log("Found Family (discriminator): " + JSON.stringify(fam)));
        if (err) {
            res.json('Something went wrong ' + req.params.gender);
        }
         res.json(foundFamily);
     });
};
