import React,{Component,useState} from "react";
import RegisterUser from "../Actions/RegisterUser";
import { connect } from "react-redux";
import "../static/css/chat.css";
import axios from "axios";
import { BrowserRouter, Routes, Route, NavLink, Router } from "react-router-dom";
import LoginSet from "./login.js"
import '../static/css/register.css';
//import { render } from "@testing-library/react";

 
class RegisterUserPage extends Component {
  constructor(props){
   super(props)
   this.code = React.createRef();
   this.username = React.createRef();
   this.email = React.createRef();
   this.password = React.createRef();
   this.repassword = React.createRef();
   this.onInputChange = this.onInputChange.bind(this);
  }
   onHandleRegistration = (event) => {
       event.preventDefault(); 
        let code = this.code.value;
        let username = this.username.value;
        let email = this.email.value;
        let password = this.password.value;
        let repassword = this.repassword.value;
        console.log(code , username , email , password , repassword)
        axios.post('http://192.168.1.113:8000/auth/users',{'username':username ,'email':email , 'password':password , 'code':code })

      const data={username,email,password,repassword};

     this.props.dispatch(RegisterUser(data));
     console.log("here1111111111111111111111111");
        
   }
    onInputChange(witch){
      const span1 = document.querySelector('#input_span_1');
      const span2 = document.querySelector('#input_span_2');
      const span3 = document.querySelector('#input_span_3');
      const span4 = document.querySelector('#input_span_4');
      const span5 = document.querySelector('#input_span_5');

      const username = document.querySelector('#register_form_input_username').value;
      const email = document.querySelector('#register_form_input_email').value;
      const pass = document.querySelector('#register_form_input_pass').value;
      const repass = document.querySelector('#register_form_input_repass').value;
      const code = document.querySelector('#register_form_input_code').value;
      
      if (witch == 1){
        console.log('1');
        if (username != ''){
            span1.style.top = 49 + 'px'
            span1.style.fontSize = 0.6 + 'em'
            
        } else if (username == ''){
            span1.style.top = 27.5 + 'px'
            span1.style.fontSize = 1 + 'em'
        }
      }else if (witch == 2){
        console.log('2')
        if (email != ''){
            span2.style.top = 49 + 'px'
            span2.style.fontSize = 0.6 + 'em'
            
        } else if (email == ''){
            span2.style.top = 27.5 + 'px'
            span2.style.fontSize = 1 + 'em'
        }
      }else if (witch == 3){
        console.log('3')
        if (pass != ''){
            span3.style.top = 49 + 'px'
            span3.style.fontSize = 0.6 + 'em'
            
        } else if (pass == ''){
            span3.style.top = 27.5 + 'px'
            span3.style.fontSize = 1 + 'em'
        }
      }else if (witch == 4){
        console.log('4')
        if (repass != ''){
            span4.style.top = 49 + 'px'
            span4.style.fontSize = 0.6 + 'em'
            
        } else if (repass == ''){
            span4.style.top = 27.5 + 'px'
            span4.style.fontSize = 1 + 'em'
        }
      }else if (witch == 5){
        console.log('5')
        if (code != ''){
            span5.style.top = 49 + 'px'
            span5.style.fontSize = 0.6 + 'em'
            
        } else if (code == ''){
            span5.style.top = 27.5 + 'px'
            span5.style.fontSize = 1 + 'em'
        }
      }
    }
  


render() {
  return(
    <div className="registerform">
      <div id="registerformbackgroundblur">
        <form class="register_form">
          <p class="register_form_title">ثبت نام </p>
          <p class="register_form_message">برای ثبت نام لازمه فرم زیر رو پر کنید</p>

          <label>
              <input 
              required=""
              type="text"
              class="register_form_input"
              id="register_form_input_username"
              name="username"  
              // placeholder={'username'} 
              ref={this.username}
              onChange={e => {
                // setUserName(e.target.value);
                this.onInputChange(1);
              }} 
              // onFocus={inputChange(1)}
              />
              <span id="input_span_1">نام کاربری</span>
          </label>

          <label>
              <input 
              required="" 
              type="email" 
              class="register_form_input"
              id="register_form_input_email"
              name="email"  
              // placeholder={'email'} 
              ref={this.email}
              onChange={e => {
                // setUserName(e.target.value);
                this.onInputChange(2);
              }} 
              // onFocus={inputChange(1)}
              />
              <span id="input_span_2">ایمیل</span>
          </label> 

          <label>
              <input 
              required="" 
              type="password" 
              class="register_form_input"
              id="register_form_input_pass"
              name="password"  
              // placeholder={'pass'}
              // value={"abc"}
              ref={this.password}
              onChange={e => {
                // setUserName(e.target.value);
                this.onInputChange(3);
              }} 
              // onFocus={inputChange(1)}
              />
              <span id="input_span_3">کلمه عبور</span>
          </label>

          <label>
              <input 
              required="" 
              type="password" 
              class="register_form_input"
              id="register_form_input_repass"
              name="repassword"  
              // placeholder={'repass'} 
              ref={this.repassword}
              onChange={e => {
                // setUserName(e.target.value);
                this.onInputChange(4);
              }} 
              // onFocus={inputChange(1)}
              />
              <span id="input_span_4">تکرار کلمه عبور</span>
          </label>
          
          <label>
              <input 
              required="" 
              type="text" 
              id='register_form_input_code'
              class="register_form_input"
              name="code"  
              // placeholder={'کد دعوت '} 
              ref={this.code}
              onChange={e => {
                // setUserName(e.target.value);
                this.onInputChange(5);
              }} 
              // onFocus={inputChange(1)}
              />
              <span id="input_span_5">کد دعوت (اختیاری)</span>
          </label>

          <button class="register_form_submit" value = 'عضویت' onClick={this.onHandleRegistration} >Submit</button>
          <p class="register_form_signin">قبلاً ثبت نام کرده ام <NavLink exact to={'/login'}> ورود </NavLink></p>
        </form>
      </div>

    </div>
  )

  }
  }
function mapStateToProps (state){
  return {data_user:state.data_user}
}

// function notSame() {
//   var pass = document.getElementById("pass").value
//   var rePass = document.getElementById("rePass").value

//   if (rePass != pass) {
//     console.log("is not same")
//     return false
//   } else {
//     return true
//   }
// }

export default connect(mapStateToProps )(RegisterUserPage);
