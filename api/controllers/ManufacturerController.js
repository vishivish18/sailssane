/**
 * ManufacturerController
 *
 * @description :: Server-side logic for managing manufacturers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	 'add-manufacturer': function(req,res){
   
        res.view();
    },
    
    
      addmanufacturer: function(req,res,next){

                        Manufacturer.create({ mcode: req.param('mcode'), mname: req.param('mname'), maddress: req.param('maddress'), mopeningbalance: req.param('mopeningbalance'), mbstcode: req.param('mbstcode') }, function userCreated(err,manufacturer) {

                                        if (err) {
                                            console.log(err);
                                            req.session.flash = {
                                            err:err
                                            }

                                        }
                                       // res.json(manufacturer);
                                res.redirect('/manufacturer');

                        });
        },
    
    
     index: function (req, res, next){
        Manufacturer.find(function foundManufacturers (err, manufacturer){
            if(err) return next (err);
           
            res.view({
            manufacturer: manufacturer
            });
        
        });
    },
    
    
};

