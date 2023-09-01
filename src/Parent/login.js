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
    // const [isloggedIn, setLoggedIn] = useState(false);
    // const [isError, setIsError] = useState(false);
    // const [userName, setUserName] = useState("");
    // const [password, setPassword] = useState("");
    // const {setAuthTokens} = UseAuth();

  this.PostLogin = this.PostLogin.bind(this);
  }
     PostLogin() {
        //var maintoken = this
        const username = { userName:this.state.userName };
        const pass = { password : this.state.password };
       // console.log('login login login............')
      //  console.log("userName, password :",this.state.userName, this.state.password)
        axios.post("https://pochat.pypi.ir/auth/token/login",
        {
        username, 
        pass 
        }).then(result => {
            console.log(result)
            if (result.status === 200) {
                console.log('username is:', this.state.userName,'password is:',this.state.password)
               var token = result.data["auth_token"]
               this.props.dispatch(GetToken(token));
                console.log("token is:" ,token)
                //setAuthTokens(result.data);
                this.setState({ isloggedIn: true })
                //setLoggedIn(true);
            }
            else {
                this.setState({ isError:true })
                //setIsError(true);
            }
        }).catch(e => {
            this.setState({ isError: true })
           // setIsError(true);
            console.log('نام کاربری یا رمز اشتباه است!')
        });

        
    }
    if (isloggedIn) {
        //  ba hamkari bakend user be yeki az sfahate admin va ya support hedyat khahad shod.
           return <Redirect to={'/SupportUser'} replace={true} />;
        
    }
    render() {
    return (
        <div>
               <form>
                <input type='text'
                    value={this.state.userName}
                    onChange={e => {
                        this.setState({userName:e.target.value})
                        //setUserName(e.target.value);
                    }}
                    placeholder={'نام کاربری'} /> <br />
   
                   <input type='password'
                    value={this.state.password}
                    onChange={e => {
                        this.setState({password:e.target.value})
                        //setPassword(e.target.value);
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

