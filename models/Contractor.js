var mongoose = require('mongoose');

User = require("./user.js")

var contractorSchema = new mongoose.Schema({
  nameContractor: String,
  idNumberContractor: String,
  addressContractor: String,
  zipCodeContractor: String,
  cityContractor: String,
  emailContractor: String,
  updated_at: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Contractor', contractorSchema);
