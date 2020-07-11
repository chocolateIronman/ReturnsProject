'use strict';

var utils = require('../utils/writer.js');
var Van = require('../service/VanService');

module.exports.getSplits = function getSplits (req, res, next) {
    Van.getSplits(req.swagger.params,res,next);
  };