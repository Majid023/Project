/**
 * BcaController
 *
 * @description :: Server-side logic for managing bcas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    result:function(req,res){
            var name = req.body.nm;
            var uid   = req.body.uid;
            Bcaresult.find({name:{$regex:name},uid:{$regex:uid}}).exec(function(error,result){
                if(!error){
                    if(result.length!=0)
                    {
                        res.view("result",{uid:result[0].uid,studentName:result[0].name,year:result[0].academic_year,programe:result[0].programe,sem:result[0].sem,courses:result[0].courses});
                    }
                    else
                    {
                        res.redirect('/bca');
                    }
                      
                      
                }
                else{
                    res.send(500,{error:"database error"});
                }
    
            });
        }
    };
    

