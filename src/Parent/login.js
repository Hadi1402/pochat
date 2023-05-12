import React,{Component, useState} from 'react';
import {NavLink,Redirect,Route} from "react-router-dom";
import axios from 'axios';
import Sidebar from './supportUser';
import registeruser from './registeruser';
import './loginregister.css';
//import {UseAuth} from "../context/auth";

//   export default function LoginSet(props) {
//     const [isloggedIn, setLoggedIn] = useState(false);
//     const [isError, setIsError] = useState(false);
//     const [userName, setUserName] = useState("");
//     const [password, setPassword] = useState("");
   // const {setAuthTokens} = UseAuth();


//     function PostLogin() {
//         axios.post("http://localhost:3000/", {
//             userName,
//             password
//         }).then(result => {
//             if (result.status === 200) {
//                 //setAuthTokens(result.data);
//                 setLoggedIn(true);
//             } else {
//                 setIsError(true);
//             }
//         }).catch(e => {
//             setIsError(true);
//         });
//     }

//     if (isloggedIn) {
//          //  ba hamkari bakend user be yeki az sfahate admin va ya support hedyat khahad shod.
//         return <Redirect to={" "} replace={true} />;
//     }

//         return (

//             <div>
//                 <form>
//                     <input type='text'
//                            value={userName}
//                            onChange={e => {
//                                setUserName(e.target.value);
//                            }}
//                            placeholder={'نام کاربری'}
//                            className='info-input'/> <br/>

//                     <input type='password'
//                            value={password}
//                            onChange={e => {
//                                setPassword(e.target.value);
//                            }}
//                            placeholder={'کلمه عبور'}
//                            className='info-input'/> <br/>

//                  <NavLink exact to={'/SupportUser'}>   ورود    </NavLink>


                  
//                     <br/> <br/>
//                     <NavLink exact to={'/registeruser'}>  ثبت نام نکرده ام </NavLink>

//                 </form>

//                 <br/><br/><br/><br/><br/>
            
//             </div>

//         )

// }


class LoginUserPage extends Component {
    constructor(props){
     super(props)
     this.username = React.createRef();
     this.email = React.createRef();
     this.password = React.createRef();
    }
    //  onHandleRegistration = (event) => {
    //      event.preventDefault(); 
    //       let code = this.code.value;
    //       let username = this.username.value;
    //       let email = this.email.value;
    //       let password = this.password.value;
    //       let repassword = this.repassword.value;
    //       axios.post('http://192.168.1.113:8000/auth/users',{'username':username ,'email':email , 'password':password , 'code':code })
  
    //     const data={username,email,password,repassword};
  
    //    this.props.dispatch(RegisterUser(data));
    //    console.log("here1111111111111111111111111");
          
    //  }
        
    
  render() {
    return(
      <div className="regiserform">
           <h3>برای عضویت  فرم زیر را پر کنید</h3>
          <form class="form">
          <p class="title">Register </p>
          <p class="message">Signup now and get full access to our app. </p>
              <div class="flex">
              <label>
                  <input required="" placeholder="" type="text" class="input"/>
                  <span>Firstname</span>
              </label>
      
              <label>
                  <input required="" placeholder="" type="text" class="input"/>
                  <span>Lastname</span>
              </label>
          </div>  
                  
          <label>
              <input required="" placeholder="" type="email" class="input"/>
              <span>Email</span>
          </label> 
              
          <label>
              <input required="" placeholder="" type="password" class="input"/>
              <span>Password</span>
          </label>
          <label>
              <input required="" placeholder="" type="password" class="input"/>
              <span>Confirm password</span>
          </label>
          <button class="submit">Submit</button>
          <p class="signin">Already have an acount ? <Route path="/login" Component="Loginuser"/> </p>
      </form>
           
      </div>
    )
  
    }
    }
  function mapStateToProps (state){
    return {data_user:state.data_user}
  }


//export default {LoginSet};