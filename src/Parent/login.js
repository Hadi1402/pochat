import React,{useState} from 'react';
import {NavLink,Redirect} from "react-router-dom";
import axios from 'axios';

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
         //replace Redirect with Navigate
        return <Redirect to={" "} replace={true} />;
    }

        return (

            <div>
                <form>
                    <input type='text'
                           value={userName}
                           onChange={e => {
                               setUserName(e.target.value);
                           }}
                           placeholder={'نام کاربری'}/> <br/>

                    <input type='password'
                           value={password}
                           onChange={e => {
                               setPassword(e.target.value);
                           }}
                           placeholder={'کلمه عبور'}/> <br/>
                    <button onClick={PostLogin}>
                        ورود اعضاء
                    </button>
                    <br/> <br/>
                    <NavLink exact to={'/registeruser'}>  ثبت نام نکرده ام </NavLink>

                </form>

                <br/><br/><br/><br/><br/>
            
            </div>

        )

}


//export default {LoginSet};