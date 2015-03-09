/**
 * StockistController
 *
 * @description :: Server-side logic for managing stockists
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	 'add-stockist': function(req,res){
   
        res.view();
    },
    
    
      addstockist: function(req,res,next){

                        Stockist.create({ scode: req.param('scode'), sname: req.param('sname'), saddress: req.param('saddress'), sopeningbalance: req.param('sopeningbalance'), sbstcode: req.param('sbstcode') }, function stockistCreated(err,stockist) {

                                        if (err) {
                                            console.log(err);
                                            req.session.flash = {
                                            err:err
                                            }

                                        }
                                       // res.json(manufacturer);
                                res.redirect('/stockist');

                        });
        },
    
    
     index: function (req, res, next){
        Stockist.find(function fonudStockist (err, Stockist){
            if(err) return next (err);
           
            res.view({
            Stockist: Stockist
            });
        
        });
    },
    
    
};

