'use strict';

var database = require("../utils/data/data");
var httpUtil = require("../utils/http/http");

/**
 * Deletes a van
 *
 * vanID String 
 * no response value expected for this operation
 **/
exports.deleteVan = function(args,res,next) {
  var id = args.VanID.value || null;

  database.deleteVan(
    id
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


/**
 * Loads a van
 *
 * vanID String 
 * no response value expected for this operation
 **/
exports.getVan = function(args,res,next) {
  var id=args.VanID.value || null;
  database.getVan(
    id
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


/**
 * Loads a list of vans
 *
 * returns List
 **/
exports.getVans = function(args,res,next) {
  database.getVans(

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


/**
 * Adds a van
 *
 * body Van 
 * no response value expected for this operation
 **/
exports.postVan = function(args,res,next) {
  var g_area=args.body.value.g_area || null;

  database.postVan(
    g_area
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

