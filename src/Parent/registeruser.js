import React from "react";
import RegisterUser from "../Actions/RegisterUser";
import { Component } from "react";
//import { render } from "@testing-library/react";
import { connect } from "react-redux";
import "../static/css/chat.css";
import axios from "axios";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import LoginSet from "../Parent/login.js"


class RegisterUserPage extends Component {
  constructor(props){
   super(props)
   this.username = React.createRef();
   this.email = React.createRef();
   this.password = React.createRef();
   this.repassword = React.createRef();
  }
   onHandleRegistration = (event) => {
       event.preventDefault(); 
        let code = this.code.value;
        let username = this.username.value;
        let email = this.email.value;
        let password = this.password.value;
        let repassword = this.repassword.value;
        axios.post('http://192.168.1.113:8000/auth/users',{'username':username ,'email':email , 'password':password , 'code':code })

      const data={username,email,password,repassword};

     this.props.dispatch(RegisterUser(data));
     console.log("here1111111111111111111111111");
        
   }
      
  
render() {
  return(
    <div className="regiserform">
         <h3>برای عضویت  فرم زیر را پر کنید</h3>
         <form>
          <div>
          <label> کد دعوت </label>
            <input type="text" name="code"  placeholder={'کد دعوت '} ref={this.code} />

          </div>
          <div>
            <label> نام کاربری </label>
            <input type="text" name="username"  placeholder={'نام کاربری'} ref={this.username} />
          </div>
          <div>
            <label> ایمیل </label>
            <input type="email" name="email"  placeholder={'ایمیل'} ref={this.email}/>
          </div>
          
          
          <div>
            <label> پسورد </label>
            <input type="password" name="password"  placeholder={'کلمه عبور'} ref={this.password}/>
          </div>
          <div>
            <label> تکرار پسورد</label>
            <input type="password" name="repassword"  placeholder={'تکرار کلمه عبور'} ref={this.repassword}/>
              
          </div>
          <div>
            <input type='button' value = 'عضویت' onClick={this.onHandleRegistration} />
            <NavLink exact to={'/login'}> قبلاً ثبت نام کرده ام </NavLink>
 
          
          </div>
        </form>
       
         
    </div>
  )

  }
  }
function mapStateToProps (state){
  return {data_user:state.data_user}
}



export default connect(mapStateToProps )(RegisterUserPage);
