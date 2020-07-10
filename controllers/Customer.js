'use strict';

var utils = require('../utils/writer.js');
var Customer = require('../service/CustomerService');

module.exports.deleteCustomer = function deleteCustomer (req, res, next) {
  var customerID = req.swagger.params['CustomerID'].value;
  Customer.deleteCustomer(customerID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomer = function getCustomer (req, res, next) {
  var customerID = req.swagger.params['CustomerID'].value;
  Customer.getCustomer(customerID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomers = function getCustomers (req, res, next) {
  Customer.getCustomers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postCustomer = function postCustomer (req, res, next) {
  var body = req.swagger.params['body'].value;
  Customer.postCustomer(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putCustomer = function putCustomer (req, res, next) {
  var customerID = req.swagger.params['CustomerID'].value;
  var body = req.swagger.params['body'].value;
  Customer.putCustomer(customerID,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
