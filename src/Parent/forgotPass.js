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
   let data = ({
    "email": this.email
    });

  let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://pochat.pypi.ir/auth/users/reset_password/',
  headers: { 
    'authorization': '8f04c3912fccee76d28700a75366c2179b9bb24e', 
    'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"', 
    'Content-Type': 'application/json', 
    'Cookie': 'sessionid=v5kdw1u088tkgvwchsb1flryy5imuh7s'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(response.data);
  console.log('reset okyyyyyyyyyyyyyy')

})
.catch((error) => {
  console.log(error);
});


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