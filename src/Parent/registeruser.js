import React from "react";
import RegisterUser from "../Actions/RegisterUser";
import { Component } from "react";
import { connect } from "react-redux";
import "../static/css/chat.css";
import axios from "axios";
import { NavLink } from "react-router-dom";


class RegisterUserPage extends Component {
  constructor(props) {
    super(props)
    this.username_ref = React.createRef();
    this.email_ref = React.createRef();
    this.password_ref = React.createRef();
    this.repassword_ref = React.createRef();
    this.onHandleRegistration = this.onHandleRegistration.bind(this)
  }

  onHandleRegistration = (event) => {
    let data = JSON.stringify({
    "email": this.email_ref.current.value,
    "username" : this.username_ref.current.value,
    "password" : this.password_ref.current.value,
   // "repassword" : this.repassword_ref.current.value
     });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://pochat.pypi.ir/auth/users/',
      headers: { 
        'authorization':this.props.data_token, 
        'Content-Type': 'application/json', 
      },
      data : data
    };
     

    axios.request(config).then(result => {
      console.log(result)
      if (result.status === 201) {
        console.log('okyyyyyyyy')
        this.props.dispatch(RegisterUser(data));
      }
    })
    .catch((e) => {
      console.log(e);
    });
  
}
  render() {
    return (
      <div className="regiserform">
        <h3>برای عضویت  فرم زیر را پر کنید</h3>
        <form>
          <div>
            <label> کد دعوت </label>
            <input type="text" name="code" placeholder={'کد دعوت '} ref={this.code_ref} />
          </div>

          <div>
            <label> نام کاربری </label>
            <input type="text" name="username" placeholder={'نام کاربری'} ref={this.username_ref} />
          </div>

          <div>
            <label> ایمیل </label>
            <input type="email" name="email" placeholder={'ایمیل'} ref={this.email_ref} />
          </div>

          <div>
            <label> پسورد </label>
            <input type="password" name="password" placeholder={'کلمه عبور'} ref={this.password_ref} />
          </div>

          <div>
            <label> تکرار پسورد</label>
            <input type="password" name="repassword" placeholder={'تکرار کلمه عبور'} ref={this.repassword_ref} />
          </div>

          <div>
            <input type='button' value='عضویت' onClick={this.onHandleRegistration} />
            <NavLink exact to={'/login'}> قبلاً ثبت نام کرده ام </NavLink>
          </div>
        </form>


      </div>
    )

  }
}


function mapStateToProps(state) {
  return { data_user: state.data_user, data_token: state.data_token
   }
}



export default connect(mapStateToProps)(RegisterUserPage);
