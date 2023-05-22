/* eslint-disable no-useless-constructor */
import React from "react";
import "../static/css/home.css";
import "../static/css/varriables.css";
import logo from "../static/img/Pochat-Logo.png"
import welcome from "../static/img/WELCOME.jpg"
import {Link, NavLink} from "react-router-dom";
import HomeSideBar from "../Parent/home-sidebar";



class Home extends React.Component {
    constructor(){
        super();
    }

    render()
        {
    return(
    <div className="home">
        <div className="home-top-bar">
            <img className="logo" alt="pochat logo" src={logo} draggable="false"/>
            <Link to='/registeruser'><button>register</button></Link>
            <Link to='/login'><button>login</button></Link>
        </div>
        <HomeSideBar></HomeSideBar>
        <img className="welcome" alt="wellcome" src={welcome} draggable="false"/>
        
    </div>

    
    )
}
}


export default Home;