

function RegisterUser(username,email,password,repassword){
    return{
     type:
        "register_user",

        payload:{
            data_user:"username("+username+")"+"email("+email+")"+"password("+password+")"+"repassword("+repassword+")"

        }


    }
   
}


  export  default RegisterUser;











