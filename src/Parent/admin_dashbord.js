import React,{Component} from "react";
import "../static/css/chat.css";
import SupportUser from "./supportUser";
import {Link} from "react-router-dom";


const url= <p> {document.URL.slice(7,21)} </p>


class AdminDashbord extends Component{
    render() {
        return (
            <div>
            
                <ul className={'dashbord'}>
                    
                    <li> {url} </li> 
                    <hr/>
                    <li>   user  </li>
                    <hr/>
                    <li> groups </li>
                    <hr/>

                   <li> <Link to="/supportuser" > chat </Link> </li>   

                      
                        
                    
                    
                </ul>
            </div>




    );
        }
    }
export default AdminDashbord;   