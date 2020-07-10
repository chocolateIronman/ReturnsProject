'use strict';

var utils = require('../utils/writer.js');
var Consignment = require('../service/ConsignmentService');

module.exports.deleteConsignment = function deleteConsignment (req, res, next) {
  Consignment.deleteConsignment(req.swagger.params,res,next);
};

module.exports.getConsignment = function getConsignment (req, res, next) {
  Consignment.getConsignment(req.swagger.params,res,next);
};

module.exports.getConsignments = function getConsignments (req, res, next) {
  Consignment.getConsignments(req.swagger.params,res,next);
};

module.exports.postConsignment = function postConsignment (req, res, next) {
  Consignment.postConsignment(req.swagger.params,res,next);
};

module.exports.putConsignment = function putConsignment (req, res, next) {
  Consignment.putConsignment(req.swagger.params,res,next);
};
