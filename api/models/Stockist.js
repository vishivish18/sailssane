/**
* Stockist.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
 schema: true,
  
  attributes: {
        
      scode: {
            type: 'string',
            required: true,
           
        },
      
        sname: {
         type: 'string',
             

        },

        sareacode: {
         type: 'string'        
        },

        saddress: {
         type: 'string'        
        },

        sopeningbalance: {
         type: 'string'        
        },

        sbstcode: {
         type: 'string'        
        },

        scstcode: {
         type: 'string'        
        }

       

  }
};






