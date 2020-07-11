import { ExportToCsv } from 'export-to-csv';

var genApi = require("../queryGeneration/gen")(__dirname+"/Scripts");
dbApi = require("../database/databaseService");

class Sql {
    static async getCustomers(){
        var result=null;

        var parameters=[];

        //single query wrapped in multi query stuff
        var query = genApi.gen("getCustomers",parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result = response[0].rows;
        }

        return result;
    }

    static async postCustomer(name,address,postcode,g_area){
        var result=[];

        var parameters=[name,address,postcode,g_area];

        //single query wrapped in multi query stuff
        var query=genApi.gen("postCustomer",parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result = response[0].rows;
        }

        return result;
    }

    static async getCustomer(id){
        var result = null;
        var parameters=[id];

        //single query wrapped in multi query stuff
        var query = genApi.gen("getCustomer",parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result=response[0].rows;
        }
        return result;
    }

    static async putCustomer(id,name,address,postcode,g_area){
        var result=[];
        var parameters=[id,name,address,postcode,g_area]

        var query = genApi.gen("putCustomer",parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result=response[0].rows;
        }
        return result;
    }

    static async deleteCustomer(id){
        var result = null;
        var parameters = [id];

        //single query wrapped in multi query stuff
        var query = genApi.gen('deleteCustomer',parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result=response[0].rows;
        }
        return result;
    }

    //---------------CONSIGNMENTS------------------------
    static async getConsignments(){
        var result=null;

        var parameters=[];

        //single query wrapped in multi query stuff
        var query = genApi.gen("getConsignments",parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result = response[0].rows;
        }

        return result;
    }

    static async postConsignment(barcode,customer_id,date_returned,date_redelivered){
        var result=[];

        var parameters=[barcode,customer_id,date_returned,date_redelivered];

        //single query wrapped in multi query stuff
        var query=genApi.gen("postConsignment",parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result = response[0].rows;
        }

        return result;
    }

    static async getConsignment(id){
        var result = null;
        var parameters=[id];

        //single query wrapped in multi query stuff
        var query = genApi.gen("getConsignment",parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result=response[0].rows;
        }
        return result;
    }

    static async putConsignment(id,barcode,customer_id,date_returned,date_redelivered){
        var result=[];
        var parameters=[id,barcode,customer_id,date_returned,date_redelivered]

        var query = genApi.gen("putConsignment",parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result=response[0].rows;
        }
        return result;
    }

    static async deleteConsignment(id){
        var result = null;
        var parameters = [id];

        //single query wrapped in multi query stuff
        var query = genApi.gen('deleteConsignment',parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result=response[0].rows;
        }
        return result;
    }

    //---------------VANS--------------------------------
    static async getVans(){
        var result=null;

        var parameters=[];

        //single query wrapped in multi query stuff
        var query = genApi.gen("getVans",parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result = response[0].rows;
        }

        return result;
    }

    static async postVan(g_area){
        var result=[];

        var parameters=[g_area];

        //single query wrapped in multi query stuff
        var query=genApi.gen("postVan",parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result = response[0].rows;
        }

        return result;
    }

    static async getVan(id){
        var result = null;
        var parameters=[id];

        //single query wrapped in multi query stuff
        var query = genApi.gen("getVan",parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result=response[0].rows;
        }
        return result;
    }

    static async deleteVan(id){
        var result = null;
        var parameters = [id];

        //single query wrapped in multi query stuff
        var query = genApi.gen('deleteVan',parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result=response[0].rows;
        }
        return result;
    }

    //---------------SPLITS--------------------------------
    static async getSplits(){
        var result=null;

        var parameters=[];

        //single query wrapped in multi query stuff
        var query = genApi.gen("getSplits",parameters);
        var response = await dbApi.multiQuery([query]);

        

        if(response[0].rows.length>0){
            result = response[0].rows;
            
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

        return result;
    }

}

module.exports = Sql;