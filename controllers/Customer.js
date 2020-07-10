'use strict';

var utils = require('../utils/writer.js');
var Customer = require('../service/CustomerService');

module.exports.deleteCustomer = function deleteCustomer (req, res, next) {
  Customer.deleteCustomer(req.swagger.params,res,next);
};

module.exports.getCustomer = function getCustomer (req, res, next) {
  Customer.getCustomer(req.swagger.params,res,next);
};

module.exports.getCustomers = function getCustomers (req, res, next) {
  Customer.getCustomers(req.swagger.params,res,next);
};

module.exports.postCustomer = function postCustomer (req, res, next) {
 Customer.postCustomer(req.swagger.params,res,next);
};

module.exports.putCustomer = function putCustomer (req, res, next) {
  Customer.putCustomer(req.swagger.params,res,next);
};
