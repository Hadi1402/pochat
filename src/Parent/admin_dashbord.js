import React, { Component } from "react";
import { Link } from "react-router-dom";
import Admin_pfp from "../static/img/01.JPG";
import "../static/css/Admin_dashboard.css";


//const url= <p> {document.URL.slice(7,21)} </p>

class AdminDashbord extends Component {
  render() {
    return (
      <div className="Home">
        <div id="Admin_dashboard">
          <div id="Admin_dashboard_menu">
            <menu>

              <h1 id="Admin_dashboard_menu_top_Admin">★ Admin</h1>

              <div id="Admin_dashboard_menu_header">
                <img  id="Admin_pfp" src={Admin_pfp}></img>
                <h1 id="Admin_name">Admin name</h1>
              </div>

              <li> <Link to="/website" > website </Link> </li>
              <li> <Link to="/user" > user </Link> </li>
              <li> <Link to="group/">   groups </Link> </li>
              <li> <Link to="/supportuser" > chat </Link> </li>

            </menu>
              
          </div>
        </div>
      </div>
    );
  }
    
}
  
  {/* <menu>
    <ul className={'dashbord'}>
      <li> <Link to="/website" > website </Link> </li>
      <br />
      <li> <Link to="/user" > user </Link> </li>
      <br />
      <li> <Link to="group/">   groups </Link> </li>
      <br />
      <li> <Link to="/supportuser" > chat </Link> </li>
    </ul>
  </menu> */}

export default AdminDashbord;   