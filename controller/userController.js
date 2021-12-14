import {modelUser} from '../models/userModel.js'
class userController{
   

    //[Get] admin/login
    getindexloginAdmin(req,res,next){
        res.render('vwAdmin/admin',{layout:'layoutAdmin'})
    }
    //[POST] admin/login
    async loginAdmin(req,res,next){
        const err = []
        const {username,password} = req.body
        if(!username){err.push({msg:"Username trống "})}
        if(!password){err.push({msg:"Password trống "})}
     
        if(err==""){
            const user = await modelUser.selectUser(username,password)
            if(user!=""){
                //Thực hiện lưu vào session và rederice vào trang quản trị 
                res.json(user)
                
            }else{
                err.push({msg:"Tài khoản hoặc mật khẩu không chính xác "})
                res.render('vwAdmin/adminLogin',{layout:'layoutAdmin',err})
                // res.render('vwAdmin/admin',{layout:'layoutAdmin',err:[{msg:"Tài khoản hoặc mật khẩu không chính sác"}]})
            }
            
        }
        else{ 
            console.log(err)
            res.render('vwAdmin/adminLogin',{layout:'layoutAdmin',err})
        }
           
    }
    //GET /admin
    indexAdmin (req,res,next){
        
        res.render('vwAdmin/indexadmin',{layout:'layoutAdmin'})
    }
}
export default new userController()