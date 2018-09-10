var express = require('express');
var router = express.Router();

var contractor = require("../controllers/contractorController.js");
var invoiceSave = require("../controllers/contractorController.js");

var passport = require('passport');
var User = require('../models/user');
var user = {};

// Edit user
router.get('/data-company/edit/:id', function (req, res) {
  user.edit(req, res);
});

// Edit update
router.post('/data-company/update/:id', function (req, res) {
  user.update(req, res);
});


router.get('/', function (req, res) {
  res.render('index');
});

router.get('/register', function (req, res) {
  msgError = req.flash('msgError');
  res.render('register', { message: msgError });
});

router.get('/edit-profile/data-company', function (req, res) {
  res.render("../views/edit-profile/data-company", { user: req.user });
});

router.get('/invoice', function (req, res) {
  res.render('invoice', { user: req.user });
});

router.get('/invoice-pro', function (req, res) {
  res.render('invoice-pro', { user: req.user });
});

router.get('/corrective-invoice', function (req, res) {
  res.render('corrective-invoice', { user: req.user });
});

router.get('/gross-margin', function (req, res) {
  res.render('gross-margin', { user: req.user });
});

router.get('/receipt', function (req, res) {
  res.render('receipt', { user: req.user });
});

router.get('/paying-in', function (req, res) {
  res.render('paying-in', { user: req.user });
});

router.get('/expenditure', function (req, res) {
  res.render('expenditure', { user: req.user });
});

router.get('/create-offer', function (req, res) {
  res.render('create-offer', { user: req.user });
});

router.post('/register', passport.authenticate('local.register', {
  successRedirect: '/login',
  failureRedirect: '/register',
  failureFlash: true
}));

router.get('/login', function (req, res) {
  login_error = req.flash('loginError');
  password_error = req.flash('passwordError');
  res.render('login', { loginError: login_error, passwordError: password_error });
});

router.post('/login', passport.authenticate('local.login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));

router.get('/profile', isLoggedIn, function (req, res) {
  console.log(req.user);
  res.render('profile', { user: req.user });
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// contractors

// Get all Contractors
router.get('/contractors', isLoggedIn, function (req, res) {
  contractor.list(req, res);
});


// Create contractor
router.get('/contractors/create', isLoggedIn, function (req, res) {
  contractor.create(req, res);
});

// Save contractor
router.post('/contractors/save', isLoggedIn, function (req, res) {
  contractor.save(req, res);
});

// Edit contractor
router.get('/document/contractor-invoice/:id', isLoggedIn, function (req, res) {
  contractor.invoice(req, res);
});

router.get('/document/contractor-invoice-pro/:id', isLoggedIn, function (req, res) {
  contractor.invoicePro(req, res);
});

router.get('/document/contractor-invoice-corrective/:id', isLoggedIn, function (req, res) {
  contractor.invoiceCorrective(req, res);
});

router.get('/document/contractor-gross-margin/:id', isLoggedIn, function (req, res) {
  contractor.grossMargin(req, res);
});

router.get('/document/contractor-receipt/:id', isLoggedIn, function (req, res) {
  contractor.receipt(req, res);
});

router.get('/document/contractor-paying-in/:id', isLoggedIn, function (req, res) {
  contractor.payingIn(req, res);
});

router.get('/document/contractor-expenditure/:id', isLoggedIn, function (req, res) {
  contractor.expenditure(req, res);
});

router.get('/document/contractor-create-offer/:id', isLoggedIn, function (req, res) {
  contractor.createOffer(req, res);
});



// Edit contractor
router.get('/contractors/edit/:id', isLoggedIn, function (req, res) {
  contractor.edit(req, res);
});

// Edit update
router.post('/contractors/update/:id', isLoggedIn, function (req, res) {
  contractor.update(req, res);
});

// Edit update delete
router.post('/contractors/delete/:id', isLoggedIn, function (req, res) {
  contractor.delete(req, res);
});

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// Show list of Users
user.list = function (req, res) {
  User.find({}).exec(function (err, user) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/edit-profile/data-company", { user: user });
    }
  });
};

// Edit an Users
user.edit = function (req, res) {
  User.findOne({ _id: req.params.id }).exec(function (err, user) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/edit-profile/edit", { user: user });
    }
  });
};

// Update an Users
user.update = function (req, res) {
  User.findByIdAndUpdate(req.params.id, {
    $set: {
      company: req.body.company,
      streetCompany: req.body.streetCompany,
      city: req.body.city,
      zipCode: req.body.zipCode,
      accountNumber: req.body.accountNumber
    }
  }, { new: true }, function (err, user) {
    if (err) {
      console.log(err);
      res.render("../views/edit-profile/edit", { user: req.body });
    }
    res.redirect("/edit-profile/data-company");
  });
};

