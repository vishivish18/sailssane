/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */




module.exports = {
	 'add-employee': function(req,res){
   
        res.view();
    },
    
    
      addemployee: function(req,res,next){

                        Employee.create({ ecode: req.param('ecode'), ename: req.param('ename'),  eareamanager: req.param('eareamanager'), eaddress: req.param('eaddress'),emr: req.param('emr'), etranport: req.param('etransport') }, function userCreated(err,employee) {

                                        if (err) {
                                            console.log(err);
                                            req.session.flash = {
                                            err:err
                                            }

                                        }
                                //        res.json(employee);
                                res.redirect('/employee');

                        });
        },
    
    
     index: function (req, res, next){
        Employee.find(function foundEmployee (err, Employee){
            if(err) return next (err);
           
            res.view({
            Employee: Employee
            });
        
        });
    },
    
    
};



