import React,{useState} from 'react';
import {NavLink,Redirect} from "react-router-dom";
import axios from 'axios';
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

        return (
                <div className="registerform">
                <form class="form">
                  <p class="title">برای ورود فرم زیر را کامل کنید</p>
                  <p class="message">ثبت نام کنید تا از قابلیت های بیشتر بهره مند شوید</p>
                    <label>
                        <input 
                        required="" 
                        type="text" 
                        class="input"
                        name="username"
                        placeholder={''} 
                        value={userName}
                        onChange={e => {
                            setUserName(e.target.value);
                        }}/>
                        <span>نام کاربری</span>
                    </label>
          
                    <label>
                        <input 
                        required=""
                        type="text"
                        class="input"
                        name="password"  
                        placeholder={''} 
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}/>
                        <span>رمز ورود</span>
                    </label>
                    <button class="submit" value = 'عضویت' exact to={'/SupportUser'}>Submit</button>
                    <link to={'/supportuser'}></link>
                    <p class="signin">ثبت نام نکرده ام<NavLink exact to={'/registeruser'}> ثبت نام </NavLink></p>
                </form>
                </div>
        )

}


//export default {LoginSet};