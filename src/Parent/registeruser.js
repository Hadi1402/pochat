import React from "react";
import RegisterUser from "../Actions/RegisterUser";
import { Component } from "react";
//import { render } from "@testing-library/react";
import { connect } from "react-redux";
import "../static/css/chat.css";
import axios from "axios";
import { BrowserRouter, Routes, Route, NavLink, Router } from "react-router-dom";
import LoginSet from "../Parent/login.js"
import '../static/css/loginregister.css';


class RegisterUserPage extends Component {
  constructor(props){
   super(props)
   this.code = React.createRef();
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
    <div className="registerform">
      <form class="form">
        <p class="title">برای عضویت,فرم زیر را پر کنید</p>
        <p class="message">ثبت نام کنید تا از قابلیت های بیشتر بهره مند شوید</p>
          <label>
              <input 
              required="" 
              type="text" 
              class="input"
              name="code"  
              placeholder={''} 
              ref={this.code}/>
              <span>کد دعوت </span>
          </label>

          <label>
              <input 
              required=""
              type="text"
              class="input"
              name="username"  
              placeholder={''} 
              ref={this.username}/>
              <span>نام کاربری</span>
          </label>
        <label>
            <input 
            required="" 
            type="email" 
            class="input"
            name="email"  
            placeholder={''} 
            ref={this.email}/>
            <span>ایمیل</span>
        </label> 
            
        <label>
            <input 
            required="" 
            type="password" 
            class="input"
            name="password"  
            placeholder={''} 
            ref={this.password}/>
            <span>کلمه عبور</span>
        </label>
        <label>
            <input 
            required="" 
            type="password" 
            class="input"
            name="repassword"  
            placeholder={''} 
            ref={this.repassword}/>
            <span>تکرار کلمه عبور</span>
        </label>
        <button class="submit" value = 'عضویت' onClick={this.onHandleRegistration} >Submit</button>
        <p class="signin">قبلاً ثبت نام کرده ام <NavLink exact to={'/login'}> ورود </NavLink></p>
    </form>
    </div>
  )

  }
  }
function mapStateToProps (state){
  return {data_user:state.data_user}
}



export default connect(mapStateToProps )(RegisterUserPage);
