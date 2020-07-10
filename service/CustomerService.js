'use strict';

var database = require("../utils/data/data");
var httpUtil = require("../utils/http/http");

/**
 * Deletes a customer
 *
 * customerID String 
 * no response value expected for this operation
 **/
exports.deleteCustomer = function(args,res,next) {
  var id=args.CustomerID.value || null;

  database.deleteCustomer(
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
 * Loads a customer
 *
 * customerID String 
 * no response value expected for this operation
 **/
exports.getCustomer = function(args,res,next) {
  var id=args.CustomerID.value || null;
  database.getCustomer(
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
 * Loads a list of customers
 *
 * returns List
 **/
exports.getCustomers = function(args,res,next) {
  database.getCustomers(

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
 * Adds a customer
 *
 * body Customer 
 * returns Customer
 **/
exports.postCustomer = function(args,res,next) {
  var name=args.body.value.name || null;
  var address=args.body.value.address || null;
  var postcode=args.body.value.postcode || null;
  var g_area=args.body.value.g_area || null;

  database.postCustomer(
    name,
    address,
    postcode,
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


/**
 * Updates a customer
 *
 * customerID String 
 * body Customer 
 * no response value expected for this operation
 **/
exports.putCustomer = function(args,res,next) {
  var id=args.CustomerID.value || null;
  var name=args.body.value.name || null;
  var address=args.body.value.address || null;
  var postcode=args.body.value.postcode || null;
  var g_area=args.body.value.g_area || null;

  database.putCustomer(
    id,
    name,
    address,
    postcode,
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

