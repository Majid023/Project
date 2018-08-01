/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
	admin:function(req, res){
        var email = req.body.email;
        var pwd = req.body.pwd;

        Admin.find({email:email,pwd:pwd}).exec(function(err,data){
            if(!err){
                if(data.length==0){
                    res.redirect("login");
                }else
                {
                    Login.create({email:data[0].email}).exec(function(err){
                        if(err){
                            res.send(500,{error:"database error"} );
                        }
                    });
                    Login.find({}).exec(function(err,result){
                        if(err)
                            res.send(500,{error:"database error"});
                        res.view("admin",{user:data[0].name,list:result});
                    });
                }
                  
            }
            else
              res.send(500,{error:"database error"});
        });
    },

};

