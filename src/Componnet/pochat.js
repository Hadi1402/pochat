import React from "react";
import "../static/css/chat.css";
import {logo} from "../static/img/Pochat-Logo.png"
import welcome from "../static/img/Welcome-Pochat.jpg"
import {NavLink} from "react-router-dom";




class Home extends React.Component {
    constructor(){
        super();
    }
    render()
        {
    return(
    <div className="home">


         <NavLink exact to={'/registeruser'}>  ثبت نام   </NavLink>
         
         <NavLink exact to={'/login'}>   ورود اعضاء   </NavLink>


        <div className="pic-chat">
          <img className="logo" src={'logo'}/>
          <img className="welcome" src={''}/>
        </div>
        

    </div>
    
    )
}
}


export default Home;