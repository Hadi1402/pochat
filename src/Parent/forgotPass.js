import React from 'react';
import axios from 'axios';
import { Component } from "react";
import { connect } from 'react-redux';
import { createRef } from "react";

class ForgotPassword extends Component {
    constructor() {
        super()
        this.email_ref = createRef();
        this.handleReresetpassword = this.handleReresetpassword.bind(this)
                 }

                 
  handleReresetpassword = (event) => {

    let data = JSON.stringify({
          "email": this.email_ref.current.value
    });

  let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://pochat.pypi.ir/auth/users/reset_password/',
  headers: { 
    'authorization':this.props.data_token, 
    'Content-Type': 'application/json', 
  },
  data : data
};

axios.request(config).then(result => {
  console.log(result)
  if (result.status === 204) {
       window.location = "/resetpassword";
  }
})
.catch((e) => {
  console.log(e);
});


    }       
  render() {
    return (
        <div>
            <div>
            <label> ************************ بازیابی رمز عبور  ************************ </label>
            <br/><br/>
            <input type="email" name="email" placeholder={'ایمیل'} ref={this.email_ref} />
            <br/><br/>
            <button onClick={this.handleReresetpassword} > بازیابی رمز</button>
          </div>
            <br /><br /><br /><br /><br />
        </div>
    )

}

}

function mapStateToProps(state) {
  return { data_token: state.data_token }
}

    
export default connect(mapStateToProps)(ForgotPassword);