'use strict';

var utils = require('../utils/writer.js');
var Consignment = require('../service/ConsignmentService');

module.exports.deleteConsignment = function deleteConsignment (req, res, next) {
  var consignmentID = req.swagger.params['ConsignmentID'].value;
  Consignment.deleteConsignment(consignmentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getConsignment = function getConsignment (req, res, next) {
  var consignmentID = req.swagger.params['ConsignmentID'].value;
  Consignment.getConsignment(consignmentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getConsignments = function getConsignments (req, res, next) {
  Consignment.getConsignments()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postConsignment = function postConsignment (req, res, next) {
  var body = req.swagger.params['body'].value;
  Consignment.postConsignment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putConsignment = function putConsignment (req, res, next) {
  var consignmentID = req.swagger.params['ConsignmentID'].value;
  var body = req.swagger.params['body'].value;
  Consignment.putConsignment(consignmentID,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
