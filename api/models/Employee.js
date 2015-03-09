/**
* Employee.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
 schema: true,
  
  attributes: {
        
      ecode: {
            type: 'string',
            required: true,
           
        },
      
        ename: {
         type: 'string',
             

        },

        eareamanager: {
         type: 'string'        
        },

        eaddress: {
         type: 'string'        
        },

        emr: {
         type: 'string'        
        },

        etransport: {
         type: 'string'        
        }
  }
};

