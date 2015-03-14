/**
 * CompanyController
 *
 * @description :: Server-side logic for managing Companys
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	 'add-Company': function(req,res){
   
        res.view();
    },
    
    
      addCompany: function(req,res,next){

                        Company.create({ mcode: req.param('mcode'), mname: req.param('mname'), maddress: req.param('maddress'), mopeningbalance: req.param('mopeningbalance'), mbstcode: req.param('mbstcode') }, function userCreated(err,Company) {

                                        if (err) {
                                            console.log(err);
                                            req.session.flash = {
                                            err:err
                                            }

                                        }
                                       // res.json(Company);
                                res.redirect('/Company');

                        });
        },
    
    
     index: function (req, res, next){
        Company.find(function foundCompanys (err, Company){
            if(err) return next (err);
           
            res.view({
            Company: Company
            });
        
        });
    },
    
    
};

