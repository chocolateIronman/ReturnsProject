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
        const options = { 
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalSeparator: '.',
          showLabels: true, 
          showTitle: true,
          title: 'My Awesome CSV',
          useTextFile: false,
          useBom: true,
          useKeysAsHeaders: true,
          // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
        };
       
      const csvExporter = new ExportToCsv(options);
       
      csvExporter.generateCsv(result);
      }
    ).catch(
      (error)=>{
        httpUtil.endHttpErr(error,res);
      }
    )
  }