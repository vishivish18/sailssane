/**
* Company.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
 schema: true,
  
  attributes: {
        
      mcode: {
            type: 'string',
            required: true,
           
        },
      
        mname: {
         type: 'string',
             

        },

        mareacode: {
         type: 'string'        
        },

        maddress: {
         type: 'string'        
        },

        mopeningbalance: {
         type: 'string'        
        },

        mbstcode: {
         type: 'string'        
        },

        mcstcode: {
         type: 'string'        
        }

       

  }
};






