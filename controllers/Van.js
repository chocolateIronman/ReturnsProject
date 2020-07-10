'use strict';

var utils = require('../utils/writer.js');
var Van = require('../service/VanService');

module.exports.deleteVan = function deleteVan (req, res, next) {
  Van.deleteVan(req.swagger.params,res,next);
};

module.exports.getVan = function getVan (req, res, next) {
  Van.getVan(req.swagger.params,res,next);
};

module.exports.getVans = function getVans (req, res, next) {
  Van.getVans(req.swagger.params,res,next);
};

module.exports.postVan = function postVan (req, res, next) {
  Van.postVan(req.swagger.params,res,next);
};
