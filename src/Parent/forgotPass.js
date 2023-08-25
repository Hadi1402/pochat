import React, { useState } from 'react';
import axios from 'axios';
import { Component } from "react";
import ResetPassword from './resetPassword';

class ForgotPassword extends Component {
    constructor() {
        super()
        this.email = React.createRef();
        this.handleReresetpassword = this.handleReresetpassword.bind(this)
                 }
    handleReresetpassword = (event) => {
        let email = this.email.current.value;
        axios.post("https://pochat.pypi.ir/auth/users/reset_password",
             {
            'email':email
        }).then(result => {
            console.log(result)
            if (result.status === 200) {
                console.log('okyyyyyyy')
                window.location.replace("/resetpassword")
            }
        }).catch(err => console.log(err));

    }       
        
  render() {
    return (
        <div>
            <div>
            <label> بازیابی رمز </label>
            <br/><br/>
            <input type="email" name="email" placeholder={'ایمیل'} ref={this.email} />
            <br/><br/>
            <button onClick={this.handleReresetpassword} > بازیابی رمز</button>
          </div>
            <br /><br /><br /><br /><br />
        </div>
    )

}

}
    
export default ForgotPassword;