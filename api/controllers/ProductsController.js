/**
 * ProductsController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
    'add-products': function(req,res){
   
        res.view();
    },
    
     addproduct: function(req,res,next){

                        Products.create({ pcode: req.param('pcode'), pname: req.param('pname'), ppacking: req.param('ppacking'), pcompany:                                    req.param('pcompany'), psalestax: req.param('psalestax'), pdiscount: req.param('pdiscount'), pboxsize :                                           req.param('pboxsize'), ppurchase : req.param('ppurchase'),pmrp : req.param('pmrp') }, function userCreated(err,product) {

                                        if (err) {
                                            console.log(err);
                                            req.session.flash = {
                                            err:err
                                            }

                                        }
                                       // res.json(product);
                                res.redirect('/products');

                        });
        },
    
    
     index: function (req, res, next){
        Products.find(function foundProducts (err, products){
            if(err) return next (err);
           
            res.view({
            products: products
            });
        
        });
    },
    
    
     
    show: function (req, res, next){
        Products.findOne(req.param('id'), function foundUser (err, products){
            if(err) return next (err);
            if(!products) return next();
            res.view({
            products: products
            });
        
        });
    },
    
      edit: function (req, res, next){
        Products.findOne(req.param('id'), function foundUser (err, products){
            if(err) return next (err);
            if(!products) return next();
            res.view({
            products: products
            });
        
        });
    },
    

};

