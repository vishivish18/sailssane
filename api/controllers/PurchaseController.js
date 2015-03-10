/**
 * PurchaseController
 *
 * @description :: Server-side logic for managing purchases
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	 'purchase-entry': function(req,res){
   
        res.view();
    },
    
    
      purchaseentry: function(req,res,next){

                        Purchase.create({ mcode: req.param('mcode'), mname: req.param('mname'), maddress: req.param('maddress'), mopeningbalance: req.param('mopeningbalance'), mbstcode: req.param('mbstcode') }, function userCreated(err,manufacturer) {

                                        if (err) {
                                            console.log(err);
                                            req.session.flash = {
                                            err:err
                                            }

                                        }
                                       // res.json(manufacturer);
                                res.redirect('/manufacturer');

                        });
        }
    
    
   
    
    
};

