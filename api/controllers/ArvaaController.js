/**
 * ArvaaController
 *
 * @description :: Server-side logic for managing Arvaas
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
    recievedata: function(req,res,next){

                        Arvaa.create({ devid: req.param('devid'), lattitude: req.param('lattitude'), longitude: req.param('longitude'), function userCreated(err,data) {

                                        if (err) {
                                            console.log(err);
                                            req.session.flash = {
                                            err:err
                                            }

                                        }
                                       res.json(data);
                                //res.redirect('/Company');

                        });
        },
};

