'use strict';

var utils = require('../utils/writer.js');
var Van = require('../service/VanService');

module.exports.deleteVan = function deleteVan (req, res, next) {
  var vanID = req.swagger.params['VanID'].value;
  Van.deleteVan(vanID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVan = function getVan (req, res, next) {
  var vanID = req.swagger.params['VanID'].value;
  Van.getVan(vanID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVans = function getVans (req, res, next) {
  Van.getVans()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postVan = function postVan (req, res, next) {
  var body = req.swagger.params['body'].value;
  Van.postVan(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
