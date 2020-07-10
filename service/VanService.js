'use strict';


/**
 * Deletes a van
 *
 * vanID String 
 * no response value expected for this operation
 **/
exports.deleteVan = function(vanID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Loads a van
 *
 * vanID String 
 * no response value expected for this operation
 **/
exports.getVan = function(vanID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Loads a list of vans
 *
 * returns List
 **/
exports.getVans = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "g_area" : "Manchester"
}, {
  "g_area" : "Manchester"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a van
 *
 * body Van 
 * no response value expected for this operation
 **/
exports.postVan = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

