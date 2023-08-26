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

    function inputs(num){
        const input1 = document.querySelector('#login_form_input_username');
        const input2 = document.querySelector('#login_form_input_password');
        // const input2 = document.querySelector('#login_form_input_password');
        const span = document.querySelector('#.login_form_input:valid + span');

        if (num == 1){
            
        }

        if (input1.value != ''){
            span.style.top = 40 ;
        }
    }

        return (
            <div className="registerform">
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
                        }}/>
                        <span>نام کاربری</span>
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
                        }}/>
                        <span>رمز ورود</span>
                    </label>
                    <button class="login_form_submit" value = 'عضویت' exact to={'/SupportUser'}>ورود</button>
                    <link to={'/supportuser'}></link>
                    <p class="login_form_signin">ثبت نام نکرده ام<NavLink exact to={'/registeruser'}> ثبت نام </NavLink></p>
                </form>
            </div>
        )

}


//export default {LoginSet};