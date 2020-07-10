'use strict';

var database = require("../utils/data/data");
var httpUtil = require("../utils/http/http");
const error = require("../utils/error");

/**
 * Deletes a Consignment
 *
 * consignmentID String 
 * no response value expected for this operation
 **/
exports.deleteConsignment = function(args,res,next) {
  var id=args.ConsignmentID.value || null;

  database.deleteConsignment(
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
 * Loads a Consignment
 *
 * consignmentID String 
 * no response value expected for this operation
 **/
exports.getConsignment = function(args,res,next) {
  var id=args.ConsignmentID.value || null;
  database.getConsignment(
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
 * Loads a list of Consignments
 *
 * returns List
 **/
exports.getConsignments = function(args,res,next) {
  database.getConsignments(

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
 * Adds a Consignment
 *
 * body Consignment 
 * no response value expected for this operation
 **/
exports.postConsignment = function(args,res,next) {
  var id=args.ConsignmentID.value || null;
  var barcode=args.body.value.barcode || null;
  var customer_id=args.body.value.customer_id || null;
  var date_returned=args.body.value.date_returned || null;
  var date_redelivered=args.body.value.date_redelivered || null;

  database.postConsignment(
    id,
    barcode,
    customer_id,
    date_returned,
    date_redelivered
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
 * Updates a Consignment
 *
 * consignmentID String 
 * body Consignment 
 * no response value expected for this operation
 **/
exports.putConsignment = function(args,res,next) {
  var id=args.ConsignmentID.value || null;
  var barcode=args.body.value.barcode || null;
  var customer_id=args.body.value.customer_id || null;
  var date_returned=args.body.value.date_returned || null;
  var date_redelivered=args.body.value.date_redelivered || null;

  database.putConsignment(
    id,
    barcode,
    customer_id,
    date_returned,
    date_redelivered
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

