/* eslint-disable no-useless-constructor */
import React from "react";
import "../static/css/home.css";
import "../static/css/right-menu.css";
import logo from "../static/img/pochat.logo-removebg-preview.png"
import welcome from "../static/img/Welcome-Pochat.jpg"
import {Link, NavLink} from "react-router-dom";


 

class Home extends React.Component {
    constructor(){
        super();
    }

    render()
        {
    return(
    <div className="home">
        <div className="home-top-bar">
            <img className="logo" alt="pochat logo" src={logo}/>

            <NavLink exact to={'/login'}>   ورود اعضاء   </NavLink>
            <br></br>
            <NavLink exact to={'/registeruser'}>  ثبت نام   </NavLink>
            <Link to='/registeruser'><button>hello</button></Link>
            <div className="menu">
                <div class="menu-btn">
                    <input class="label-check" id="label-check" type="checkbox"/>
                    <label for="label-check" class="hamburger-label">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                    <label></label></label>
                </div>
                <div></div>
            </div>
        </div>
        <img className="welcome" alt="wellcome" src={welcome}/>
        
    </div>

    
    )
}
}


export default Home;