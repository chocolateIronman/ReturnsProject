'use strict';

var utils = require('../utils/writer.js');
var Splits = require('../service/SplitsService');

module.exports.getSplits = function getSplits (req, res, next) {
    Splits.getSplits(req.swagger.params,res,next);
  };