import {modelUser} from '../models/userModel.js'
import {modelPokemon} from '../models/pokemonModel.js'
class userController{
   

    //[Get] admin/login
    getindexloginAdmin(req,res,next){
        res.render('vwAdmin/adminLogin',{layout:'layoutLogin'})
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
                delete user[0].password
                req.session.User = user
                req.session.isAuth = true;
                res.redirect('/admin');
                
            }else{
                err.push({msg:"Tài khoản hoặc mật khẩu không chính xác "})
                req.session.isAuth = false;
                res.render('vwAdmin/adminLogin',{layout:'layoutAdmin',err})
                // res.render('vwAdmin/admin',{layout:'layoutAdmin',err:[{msg:"Tài khoản hoặc mật khẩu không chính sác"}]})
            }
            
        }
        else{ 
            req.session.isAuth = false;
            res.render('vwAdmin/adminLogin',{layout:'layoutAdmin',err})
        }
           
    }
    logout(req,res,next){
        req.session.isAuth = false;
        res.redirect('/admin/login')
    }
    //GET /admin
    async indexAdmin (req,res,next){
        const recordTotal = await modelPokemon.countAllPokemon();

        res.render('vwAdmin/indexadmin',{layout:'layoutAdmin',total:recordTotal[0].total})
    }
    async changepassword(req,res,next){
        const user = req.session.User
        const username = user[0].username
        var { oldpassword,newpassword,comfirmpassword} = req.body
         const resuld  = await modelUser.selectUser(username,oldpassword)
         if(resuld==""){
                res.json("Mật khẩu không chính xác")
         }else{
             try {
                 await modelUser.changepassword(username,newpassword)
                 res.redirect('/admin')
             } catch (error) {
                 res.json("Lỗi")
             }
         }
    }
}
export default new userController()