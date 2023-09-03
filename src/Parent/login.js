import React , { Component } from 'react';
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios';
import GetToken from "../Actions/GetToken";


class LoginSet extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isloggedIn:false,
        isError:false,
        userName: '',
        password: '',
      }
   
         this.PostLogin = this.PostLogin.bind(this);
  }
     PostLogin() {
        const username = this.state.userName ;
        const pass = this.state.password ;
        
        let data = JSON.stringify({
            "password": pass,
            "username": username
          });
          
          let config = {
            method: 'post',
            url: 'https://pochat.pypi.ir/auth/token/login',
            headers: { 
              'content-type': 'application/json', 
            },
            data : data
          };

          axios.request(config).then(result => {
            console.log(result)
            if (result.status === 200) {
                console.log('username is:', this.state.userName,'password is:',this.state.password)
               var token = result.data["auth_token"]
               this.props.dispatch(GetToken(token));
                console.log("token is:" ,token)
                this.setState({ isloggedIn: true })
                 window.location.replace("/SupportUser");
            }
            else {
                this.setState({ isError:true })
            }
        }).catch(e => {
            console.log(e)
            this.setState({ isError: true })
            console.log('نام کاربری یا رمز اشتباه است!')
        });

    }
  
    render() {
    return (
        <div>
               <form>
                <input type='text'
                    value={this.state.userName}
                    onChange={e => {
                        this.setState({userName:e.target.value})
                    }}
                    placeholder={'نام کاربری'} /> <br />
   
                   <input type='password'
                    value={this.state.password}
                    onChange={e => {
                           this.setState({password:e.target.value})
                    }}
                    placeholder={'کلمه عبور'} /> <br />
  
                 <input type='button' value='ورود' className="btnoky" onClick={this.PostLogin} />
               <br />
                
                <NavLink exact to={'/registeruser'}>  ثبت نام نکرده ام </NavLink>
                   <br/> <NavLink exact to={'/forgotpassword'}>  فراموشی رمز </NavLink>

            </form>
            <br /><br /><br /><br /><br />
        </div>
    )

}

}

function mapStateToProps(state) {
    return { data_token: state.data_token }
  }
  
  
  
export default connect(mapStateToProps)(LoginSet);

