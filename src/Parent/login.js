import React,{useState} from 'react';
import {NavLink,Redirect} from "react-router-dom";
import axios from 'axios';
import '../static/css/login.css'
// import Sidebar from './supportUser';

//import {UseAuth} from "../context/auth";

  export default function LoginSet(props) {
    const [isloggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
   // const {setAuthTokens} = UseAuth();


    function PostLogin() {
        axios.post("http://localhost:3000/", {
            userName,
            password
        }).then(result => {
            if (result.status === 200) {
                //setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    if (isloggedIn) {
         //  ba hamkari bakend user be yeki az sfahate admin va ya support hedyat khahad shod.
        return <Redirect to={"/supportuser"} replace={true} />;
    }

    function inputChange(witch){
        const span1 = document.querySelector('#input_span_1');
        const span2 = document.querySelector('#input_span_2');
        const username = document.querySelector('#login_form_input_username').value;
        const password = document.querySelector('#login_form_input_password').value;
        
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
            if (password != ''){
                span2.style.top = 49 + 'px'
                span2.style.fontSize = 0.6 + 'em'
                
            } else if (password == ''){
                span2.style.top = 27.5 + 'px'
                span2.style.fontSize = 1 + 'em'
            }
        }
    }
    


    return (
        <div className="loginform">
            <div id='loginformbackgroundblur'>
                <form class="login_form">
                    <p class="login_form_title">ورود</p>
                    <p class="login_form_message">برای وارد شدن فرم زیر را پر کنید</p>

                    <label className='a1a1'>
                        <input 
                        required=""
                        type="text" 
                        id='login_form_input_username'
                        class="login_form_input"
                        name="username"
                        // placeholder={''} 
                        value={userName}
                        onChange={e => {
                            setUserName(e.target.value);
                            inputChange(1);
                        }}
                        // onFocus={inputChange(1)}
                        />
                        <span id='input_span_1'>نام کاربری</span>
                    </label>
            
                    <label>
                        <input 
                        required=""
                        type="password"
                        id='login_form_input_password'
                        class="login_form_input"
                        name="password"  
                        // placeholder={''} 
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                            inputChange(2);
                        }}
                        // onFocus={inputChange(2)}
                        />
                        <span id='input_span_2'>رمز ورود</span>
                    </label>
                    <button class="login_form_submit" value = 'عضویت' exact to={'/SupportUser'}>ورود</button>
                    <link to={'/supportuser'}></link>
                    <p class="login_form_signin">ثبت نام نکرده ام  <NavLink exact to={'/registeruser'}> ثبت نام </NavLink></p>
                </form>
            </div>
        </div>
    )

}


//export default {LoginSet};