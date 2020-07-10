/**
 * Thanks to the Open-Source community for providing this project structure.
**/
"use strict";

var Sql = require("../SQL/sql");
var errorApi = require("../error");

var doGetCustomers = async()=>{
    var result = null;
    result = await Sql.getCustomers();
    return result;
}
var getCustomers = async()=>{
    var result=null;

    try{
        result = await doGetCustomers();
    } catch(error) {
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
};

function isEmpty(param){
    return param === undefined || param === null;
}

var doPostCustomer=async(name,address,postcode,g_area)=>{
    var result=[];
    result=await Sql.postCustomer(name,address,postcode,g_area);
    return result;
}
var postCustomer=async(name,address,postcode,g_area)=>{
    var result=[];
    if(isEmpty(name)) throw errorApi.create400Error("Parameter 'name' is null. ");
    if(isEmpty(address)) throw errorApi.create400Error("Parameter 'address' is null. ");
    if(isEmpty(postcode)) throw errorApi.create400Error("Parameter 'postcode' is null. ");
    if(isEmpty(g_area)) throw errorApi.create400Error("Parameter 'g_area' is null. ");

    try{
        result = await doPostCustomer(name,address,postcode,g_area);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doGetCustomer = async(id)=>{
    var result = null;
    result = await Sql.getCustomer(id);
    return result;
}
var getCustomer = async(id)=>{
    var result=null;

    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");

    try{
        result = await doGetCustomer(id);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doPutCustomer = async(id,name,address,postcode,g_area)=>{
    var result = null;
    result=await Sql.putCustomer(id,name,address,postcode,g_area);
    return result;
}
var putCustomer=async(id,name,address,postcode,g_area)=>{
    var result=null;

    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");
    if(isEmpty(name)) throw errorApi.create400Error("Parameter 'name' is null.");
    if(isEmpty(address)) throw errorApi.create400Error("Parameter 'address' is null.");
    if(isEmpty(postcode)) throw errorApi.create400Error("Parameter 'postcode' is null.");
    if(isEmpty(g_area)) throw errorApi.create400Error("Parameter 'g_area' is null.");

    try{
        result = await doPutCustomer(id,name,address,postcode,g_area);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doDeleteCustomer = async(id)=>{
    var result = null;
    result = await Sql.deleteCustomer(id);
    return result;
}
var deleteCustomer=async(id)=>{
    var result=null;

    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");

    try{
        result = await doDeleteCustomer(id);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

//-------------------CONSIGNMENTS--------------------
var doGetConsignments = async()=>{
    var result = null;
    result = await Sql.getConsignments();
    return result;
}
var getConsignments = async()=>{
    var result=null;

    try{
        result = await doGetConsignments();
    } catch(error) {
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
};

var doPostConsignment=async(barcode,customer_id,date_returned,date_redelivered)=>{
    var result=[];
    result=await Sql.postConsignment(barcode,customer_id,date_returned,date_redelivered);
    return result;
}
var postConsignment=async(barcode,customer_id,date_returned,date_redelivered)=>{
    var result=[];
    if(isEmpty(barcode)) throw errorApi.create400Error("Parameter 'barcode' is null. ");
    if(isEmpty(customer_id)) throw errorApi.create400Error("Parameter 'customer_id' is null. ");
    if(isEmpty(date_returned)) throw errorApi.create400Error("Parameter 'date_returned' is null. ");
    if(isEmpty(date_redelivered)) throw errorApi.create400Error("Parameter 'date_redelivered' is null. ");

    try{
        result = await doPostConsignment(barcode,customer_id,date_returned,date_redelivered);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doGetConsignment = async(id)=>{
    var result = null;
    result = await Sql.getConsignment(id);
    return result;
}
var getConsignment = async(id)=>{
    var result=null;

    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");

    try{
        result = await doGetConsignment(id);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doPutConsignment = async(id,barcode,customer_id,date_returned,date_redelivered)=>{
    var result = null;
    result=await Sql.putConsignment(id,barcode,customer_id,date_returned,date_redelivered);
    return result;
}
var putConsignment=async(id,barcode,customer_id,date_returned,date_redelivered)=>{
    var result=null;

    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");
    if(isEmpty(barcode)) throw errorApi.create400Error("Parameter 'barcode' is null.");
    if(isEmpty(customer_id)) throw errorApi.create400Error("Parameter 'customer_id' is null.");
    if(isEmpty(date_returned)) throw errorApi.create400Error("Parameter 'date_returned' is null.");
    if(isEmpty(date_redelivered)) throw errorApi.create400Error("Parameter 'date_redelivered' is null.");

    try{
        result = await doPutConsignment(id,barcode,customer_id,date_returned,date_redelivered);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doDeleteConsignment = async(id)=>{
    var result = null;
    result = await Sql.deleteConsignment(id);
    return result;
}
var deleteConsignment=async(id)=>{
    var result=null;

    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");

    try{
        result = await doDeleteConsignment(id);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

//-------------------VANS----------------------------
var doGetVans = async()=>{
    var result = null;
    result = await Sql.getVans();
    return result;
}
var getVans = async()=>{
    var result=null;

    try{
        result = await doGetVans();
    } catch(error) {
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
};

var doPostVan=async(g_area)=>{
    var result=[];
    result=await Sql.postVan(g_area);
    return result;
}
var postVan=async(g_area)=>{
    var result=[];
    if(isEmpty(g_area)) throw errorApi.create400Error("Parameter 'g_area' is null. ");

    try{
        result = await doPostVan(g_area);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doGetVan= async(id)=>{
    var result = null;
    result = await Sql.getVan(id);
    return result;
}
var getVan = async(id)=>{
    var result=null;

    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");

    try{
        result = await doGetVan(id);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doDeleteVan = async(id)=>{
    var result = null;
    result = await Sql.deleteVan(id);
    return result;
}
var deleteVan=async(id)=>{
    var result=null;

    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");

    try{
        result = await doDeleteVan(id);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}


module.exports = {
    getCustomers:getCustomers,
    postCustomer:postCustomer,
    getCustomer:getCustomer,
    putCustomer:putCustomer,
    deleteCustomer:deleteCustomer,

    getConsignments:getConsignments,
    postConsignment:postConsignment,
    getConsignment:getConsignment,
    putConsignment:putConsignment,
    deleteConsignment:deleteConsignment,
    
    getVans:getVans,
    postVan:postVan,
    getVan:getVan,
    deleteVan:deleteVan
}