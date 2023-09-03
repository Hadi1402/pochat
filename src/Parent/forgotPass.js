import React from 'react';
import axios from 'axios';
import { Component } from "react";
import ResetPassword from './resetPassword';
import {Redirect ,Navigate} from "react-router-dom";
import { connect } from 'react-redux';
import GetToken from "../Actions/GetToken";

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
    'Content-Type': 'application/json', 
  },
  data : data
};

// axios.request(config)
// .then((response) => {
//   console.log(response.data);
//   console.log('reset okyyyyyyyyyyyyyy');
//   <Redirect replace to="/resetpassword" />
// })

axios.request(config).then(result => {
  console.log(result)
  if (result.status === 200) {
     var token = result.data["auth_token"]
     this.props.data_token(GetToken(token));
      console.log("token is:" ,token)
       window.location.replace("/resetpassword");
  }
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

function mapStateToProps(state) {
  return { data_token: state.data_token }
}

    
export default connect(mapStateToProps)(ForgotPassword);