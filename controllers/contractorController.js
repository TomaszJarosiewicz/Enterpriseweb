var mongoose = require("mongoose");
var Contractor = require("../models/Contractor");

var contractorController = {};
var invoiceSave = {};

// Show list of Contractors
contractorController.list = function(req, res) {
  Contractor.find({user: req.user}).exec(function (err, contractors) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/contractors/index", {contractors: contractors, user: req.user});
    }
  });
};

// Create new contractor
contractorController.create = function(req, res) {
  res.render("../views/contractors/create");
};

contractorController.delete = function(req, res) {
  res.render("../views/contractors/delete");
};

// Save new contractor
contractorController.save = function(req, res) {
  var contractor = new Contractor(req.body);
  console.log(req);
  contractor.user = req.user;

  contractor.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/contractors");
    } else {
      console.log("Successfully created an contractor.");
      res.redirect("/contractors");
    }
  });
};

// show an contractor
contractorController.invoice = function(req, res) {
  Contractor.findOne({_id: req.params.id}).exec(function (err, contractor) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/contractors/document/contractor-invoice", {contractor: contractor, user: req.user});
    }
  });
};

// show an contractor
contractorController.invoicePro = function(req, res) {
  Contractor.findOne({_id: req.params.id}).exec(function (err, contractor) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/contractors/document/contractor-invoice-pro", {contractor: contractor, user: req.user});
    }
  });
};

// show an contractor
contractorController.invoiceCorrective = function(req, res) {
  Contractor.findOne({_id: req.params.id}).exec(function (err, contractor) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/contractors/document/contractor-invoice-corrective", {contractor: contractor, user: req.user});
    }
  });
};

// show an contractor
contractorController.grossMargin = function(req, res) {
  Contractor.findOne({_id: req.params.id}).exec(function (err, contractor) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/contractors/document/contractor-gross-margin", {contractor: contractor, user: req.user});
    }
  });
};

// show an contractor
contractorController.receipt = function(req, res) {
  Contractor.findOne({_id: req.params.id}).exec(function (err, contractor) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/contractors/document/contractor-receipt", {contractor: contractor, user: req.user});
    }
  });
};

// show an contractor
contractorController.payingIn = function(req, res) {
  Contractor.findOne({_id: req.params.id}).exec(function (err, contractor) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/contractors/document/contractor-paying-in", {contractor: contractor, user: req.user});
    }
  });
};

// show an contractor
contractorController.expenditure = function(req, res) {
  Contractor.findOne({_id: req.params.id}).exec(function (err, contractor) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/contractors/document/contractor-expenditure", {contractor: contractor, user: req.user});
    }
  });
};

// show an contractor
contractorController.createOffer = function(req, res) {
  Contractor.findOne({_id: req.params.id}).exec(function (err, contractor) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/contractors/document/contractor-create-offer", {contractor: contractor, user: req.user});
    }
  });
};

// Edit an contractor
contractorController.edit = function(req, res) {
  Contractor.findOne({_id: req.params.id}).exec(function (err, contractor) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/contractors/edit", {contractor: contractor});
    }
  });
};

// Update an contractor
contractorController.update = function(req, res) {
  Contractor.findByIdAndUpdate(req.params.id, { $set:
    { nameContractor: req.body.nameContractor,
      idNumberContractor: req.body.idNumberContractor,
      addressContractor: req.body.addressContractor,
      zipCodeContractor: req.body.zipCodeContractor,
      cityContractor: req.body.cityContractor,
      emailContractor: req.body.emailContractor }},
      { new: true }, function (err, contractor) {
    if (err) {
      console.log(err);
      res.render("../views/contractors", {contractor: req.body});
    }
    res.redirect("/contractors");
  });
};

// Delete an contractor
contractorController.delete = function(req, res, next) {
  Contractor.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Contractor deleted!");
      res.redirect("/contractors");
    }
  });
};

module.exports = contractorController;


