var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    fullname: {type: String},
    email: {type: String},
    password: {type: String},
        company: {type: String},
        streetCompany: {type: String},
        city: {type: String},
        zipCode: {type: String},
        numberCompany: {type: String},
        accountNumber: {type: String}
});

userSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', userSchema);