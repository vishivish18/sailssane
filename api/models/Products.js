/**
* Products.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
 schema: true,
  
  attributes: {
        
      pcode: {
            type: 'string',
            required: true,
           
        },
      
        pname: {
         type: 'string',
             

        },

        ppacking: {
         type: 'string'        
        },

        pcompany: {
         type: 'string'        
        },

        psalestax: {
         type: 'string'        
        },

        pdiscount: {
         type: 'string'        
        },

        pboxsize: {
         type: 'string'        
        },

        ppurchase: {
         type: 'string'        
        },

        pmrp: {
         type: 'string'        
        }

  }
};






