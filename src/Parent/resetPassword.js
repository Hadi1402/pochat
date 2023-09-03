import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import "../static/css/chat.css";
import axios from "axios";
import { NavLink } from "react-router";


class ResetPassword extends Component {
  constructor(props) {
    super(props)
   
  }

  render() {
    return (
      <div className="regiserform">
        <h3>بازیابی کلمه عبور </h3>
        <form>
        <div>
            <label>  کد را وارد کنید </label>
            <input type="text" name="code" placeholder={' کد ارسالی'} />
          </div>
          <div>
            <label>  پسورد جدید </label>
            <input type="password" name="password" placeholder={'کلمه عبور'} ref={this.password} />
          </div>

          <div>
            <label> تکرار پسورد</label>
            <input type="password" name="repassword" placeholder={'تکرار کلمه عبور'} ref={this.repassword} />
          </div>

          <div>
            <input type='button' value='تایید' onClick={""} />
          </div>
        </form>


      </div>
    )

  }
}





export default ResetPassword;
