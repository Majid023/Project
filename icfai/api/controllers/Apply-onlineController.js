/**
 * Apply-onlineController
 *
 * @description :: Server-side logic for managing apply-onlines
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	submit: function(req,res){
        var name = req.body.name;
        var mb = req.body.mb;
        var city= req.body.city;
        var programe=req.body.programe.value;
        var email = req.body.email;
        Apply_online.create({name:name,mobile:mb,city:city,programe:programe,email:email}).exec(function(err){
            if(err)
               res.send(500,{error:"database error"});
        });
        res.send("<h1 >Thank you for appling...</h1>");
    }
};

