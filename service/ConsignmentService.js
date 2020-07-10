'use strict';


/**
 * Deletes a Consignment
 *
 * consignmentID String 
 * no response value expected for this operation
 **/
exports.deleteConsignment = function(consignmentID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Loads a Consignment
 *
 * consignmentID String 
 * no response value expected for this operation
 **/
exports.getConsignment = function(consignmentID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Loads a list of Consignments
 *
 * returns List
 **/
exports.getConsignments = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "barcode" : 1234567891234,
  "customer_id" : "uuid-12345",
  "date_returned" : 1594319612,
  "date_redelivered" : 1594419612
}, {
  "barcode" : 1234567891234,
  "customer_id" : "uuid-12345",
  "date_returned" : 1594319612,
  "date_redelivered" : 1594419612
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a Consignment
 *
 * body Consignment 
 * no response value expected for this operation
 **/
exports.postConsignment = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a Consignment
 *
 * consignmentID String 
 * body Consignment 
 * no response value expected for this operation
 **/
exports.putConsignment = function(consignmentID,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

