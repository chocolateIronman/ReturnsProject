'use strict';


/**
 * Deletes a customer
 *
 * customerID String 
 * no response value expected for this operation
 **/
exports.deleteCustomer = function(customerID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Loads a customer
 *
 * customerID String 
 * no response value expected for this operation
 **/
exports.getCustomer = function(customerID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Loads a list of customers
 *
 * returns List
 **/
exports.getCustomers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Maria",
  "address" : "Liverpool Rd",
  "postcode" : "M20",
  "g_area" : "uuid-12345"
}, {
  "name" : "Maria",
  "address" : "Liverpool Rd",
  "postcode" : "M20",
  "g_area" : "uuid-12345"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a customer
 *
 * body Customer 
 * returns Customer
 **/
exports.postCustomer = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Maria",
  "address" : "Liverpool Rd",
  "postcode" : "M20",
  "g_area" : "uuid-12345"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a customer
 *
 * customerID String 
 * body Customer 
 * no response value expected for this operation
 **/
exports.putCustomer = function(customerID,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

