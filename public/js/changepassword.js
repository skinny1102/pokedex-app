

var btnchangepassword = document.getElementById('btn-changepassword')
var changepasswordform = document.getElementById('changepassword')
var diverrElement = document.getElementById('tag-err')
console.log(btnchangepassword);
btnchangepassword.onclick = ()=>{
    var oldPassword = document.getElementById('oldpassword')
    var newPassword =  document.getElementById('newpassword')
    var cfPassword = document.getElementById('comfirmpassword')
    var  err = []
    var errElement = document.getElementById('eror-pass')
    if (oldPassword.value==""){err.push({msg:"Mật khẩu cũ trông "}) }
    if (newPassword.value==""){err.push({msg:"Mật mới cũ trông "}) }
    if (cfPassword.value==""){err.push({msg:"Mật khẩu xác nhận trống"}) }
 
    
    if(err==""){
        if(newPassword.value!=cfPassword.value){
            err.push({msg:"Mật khẩu xác nhận không đúng"})
            updateUI(err)
        }else{
            changepasswordform.submit();
        }
        
    }else{
        updateUI(err)
    }
   
}
var updateUI = (err)=>{
    var error_text = document.querySelectorAll('.error-text')
    if(error_text!=""){error_text.forEach((element)=>{element.remove()})}
    err.forEach((element)=>{
        let p = document.createElement("p")
        let br = document.createElement("br")
        p.classList.add('text-danger')
        p.classList.add('error-text')
        var textnode = document.createTextNode("*"+element.msg)
        p.appendChild(textnode)
        diverrElement.appendChild(p)

    })
}