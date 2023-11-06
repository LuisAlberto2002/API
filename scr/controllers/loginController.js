const jws=require('jsonwebtoken');
const secret=process.env.KEY;
const userModel=require('./../models/users');
class LoginController{
    login(req,res){
        const {email,password}=req.body;
        console.log('Body: ',req.body);
        userModel.findOne({email,password}).then((response)=>{
            console.log(response);
            if(response){
                const token=jws.sign({
                    _id:response._id,
                    email:response.email
                },secret);
                console.log('Token: ',token);

                /*process.env.TOKEN=token;
                console.log(process.env.TOKEN);*/
                res.send({token});

            }else{
                res.sendStatus(400);
            }
        }).catch((err)=>{
            console.log('Error: ',err);
        });
    }
}

module.exports=new LoginController();