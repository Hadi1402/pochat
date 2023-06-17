import React,{Component} from "react";
import "../static/css/chat.css";
import {Link} from "react-router-dom";
import "../static/css/chat.css";


//const url= <p> {document.URL.slice(7,21)} </p>

class AdminDashbord extends Component{
    render() {
        return (
            <div>
              <menu>
                <ul className={'dashbord'}>   
                  <li> <Link to="/website" > website </Link> </li>
                  <br/>
                  <li> <Link to="/user" > user </Link> </li>
                  <br/>
                  <li> <Link to= "group/">   groups </Link> </li>
                  <br/>
                  <li> <Link to="/supportuser" > chat </Link> </li>        
                </ul>
              </menu>
            </div>
    );

        }

    }
    
export default AdminDashbord;   