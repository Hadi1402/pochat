import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import "../static/css/chat.css";



const url= <p> {document.URL.slice(7,21)} </p>


class AdminDashbord extends Component{
    render() {
        return (
            <div>
                <ul className={'dashbord'}>
                    
                    <li> {url} </li> 
                    <hr/>
                    <li> users  </li>
                    <hr/>
                    <li> groups </li>
                        
                    
                    
                </ul>
            </div>




    );
        }
    }
export default AdminDashbord;   