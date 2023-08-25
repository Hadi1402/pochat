import React, { useState } from 'react';
import { NavLink, Redirect } from "react-router-dom";
import axios from 'axios';


export default function LoginSet(props) {
    const [isloggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
   
    // const {setAuthTokens} = UseAuth();


    function PostLogin() {
        console.log('login login login............')
        console.log("userName, password :",userName, password)
        axios.post("https://pochat.pypi.ir/auth/token/login",
        {
       'username': userName, 'password':password
        }).then(result => {
            console.log(result)
            if (result.status === 200) {
                //setAuthTokens(result.data);
                setLoggedIn(true);
            }
            else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
            console.log('نام کاربری یا رمز اشتباه است!')
        });

        
    }
    if (isloggedIn) {
        //  ba hamkari bakend user be yeki az sfahate admin va ya support hedyat khahad shod.
        return <Redirect to={'/SupportUser'} replace={true} />;
        
    }

    return (
        <div>
            <form>
                <input type='text'
                    value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    placeholder={'نام کاربری'} /> <br />

                <input type='password'
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder={'کلمه عبور'} /> <br />
                    
                 <input type='button' value='ورود' className="btnoky" onClick={PostLogin} />
               <br />
                
                <NavLink exact to={'/registeruser'}>  ثبت نام نکرده ام </NavLink>
               <br/> <NavLink exact to={'/forgotpassword'}>  فراموشی رمز </NavLink>

            </form>
            <br /><br /><br /><br /><br />
        </div>
    )

}


//export default {LoginSet};