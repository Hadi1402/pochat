import React, { useState } from 'react';
import { NavLink, Redirect } from "react-router-dom";
import axios from 'axios';


class ResetPassword extends() {
    constructor(props) {
        super(props)
        this.email = React.createRef();
   

        handleReresetpassword = (event) => {
        let email = this.email.current.value;
        axios.post("https://pochat.pypi.ir/auth/users/reset_password",
        {
        'password':password
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
        });
  
        
    }
    

    return (
        <div>
            <div>
            <label> ایمیل </label>
            <input type="email" name="email" placeholder={'ایمیل'} ref={this.email} />
          </div>
            <br /><br /><br /><br /><br />
        </div>
    )

}


//export default {LoginSet};