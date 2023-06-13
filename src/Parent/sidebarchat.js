import React from "react";
import "../static/css/chat.css";
import { Avatar } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";


function SidebarChat(){
 const[seed , setSeed] = useState("");
  useEffect(() =>{
    setSeed(Math.floor(Math.random() * 50));
   }, [] ) ;
  

    return(
        <div className="sidebarchat">
            <Avatar src={''}/>
          <div className="sidebarchat_info">
            <h3> user name... </h3>
            <p>  last message </p>
          </div>    
        </div>
      )
   }



export default SidebarChat;