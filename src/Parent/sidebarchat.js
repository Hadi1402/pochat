import React from "react";
import "../static/css/chat.css";
import { Avatar } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";

import axios from 'axios';

function SidebarChat(){
  var chat_list = []

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://pochat.pypi.ir/chat/chat_list/',
    headers: { 
      'authorization': 'token 8f04c3912fccee76d28700a75366c2179b9bb24e', 
      'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"', 
      'Cookie': 'sessionid=v5kdw1u088tkgvwchsb1flryy5imuh7s'
    }
  };
  
  axios.request(config)
  .then((response) => {
    chat_list = <p> + JSON.stringify(response.data) +  </p> 
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
 const[seed , setSeed] = useState("");
  useEffect(() =>{
    setSeed(Math.floor(Math.random() * 50));
     }, [] ) ;
  

    return(
        <div className="sidebarchat">
            <Avatar src={''}/>
          <div className="sidebarchat_info">
            <h3> { chat_list } </h3>
            <p>  last message </p>
          </div>    
        </div>
      )
   }



export default SidebarChat;