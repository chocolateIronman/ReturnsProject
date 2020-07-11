'use strict';

var database = require("../utils/data/data");
var httpUtil = require("../utils/http/http");

/**
 * Loads a list of consignments and their van
 *
 * returns List
 **/
exports.getSplits = function(args,res,next) {
    database.getSplits(
  
    ).then(
      (result)=>{
        httpUtil.endHttpOK(result,res);
      }
    ).catch(
      (error)=>{
        httpUtil.endHttpErr(error,res);
      }
    )
  }