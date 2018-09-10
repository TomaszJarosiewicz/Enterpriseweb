var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use('local.register', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done){

    User.findOne({'email': email}, function(err, user){
        if(err) {
            return done(err);
        }
        if(user){
            req.flash('msgError', 'Podany adres E-mail już istnieje');
            return done(null, false);
        }
        var newUser = new User();
        newUser.fullname = req.body.fullname;
        newUser.email = req.body.email;
        newUser.password = newUser.encryptPassword(req.body.password);
        newUser.company = req.body.company;
        newUser.streetCompany = req.body.streetCompany;
        newUser.city = req.body.city;
        newUser.zipCode = req.body.zipCode;
        newUser.numberCompany = req.body.numberCompany;
        newUser.accountNumber = req.body.accountNumber;

        newUser.save(function(err){
            if(err) {
                return done(err);
            }
            return done(null, newUser);
        })
    })
}));


passport.use('local.login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done){

    User.findOne({'email': email}, function(err, user){
        if(err) {
            return done(err);
        }
        if(!user){
            req.flash('loginError', 'Niepoprawny adres email');
            return done(null, false);
        }
        if(!user.validPassword(req.body.password)){
            req.flash('passwordError', 'Błąd hasła');
            return done(null, false);
        }

        return done(null, user);
    })

}));