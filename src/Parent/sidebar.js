import React, { Component } from "react";
import "../static/css/chat.css"
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon  from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./sidebarchat";
import Chat from "../Componnet/chat";


class Sidebar extends React.Component {

    constructor() {
        super();
      }
    
    render(){
        return(
          <div className="app">
           <div className="app_body"> 
            
            <div className="sidebar">

                <div className="sidebar_header">
                </div>

                <div className="sidebar_headerRight">
                    <Avatar/>
                    <IconButton> 
                    <DonutLargeIcon />
                    </IconButton>
                    
                    <IconButton> 
                    <ChatIcon /> 
                    </IconButton>

                    <IconButton> 
                    <MoreVertIcon />
                    </IconButton>

                </div>

                <div className="sidebar_search">
                    <div className="sidedar_searchContainer">
                    <SearchOutlined/>
                    <input placeholder=" search ... " />
                    </div>
                    

                </div>

                <div className="sidebar_chats">
                    <SidebarChat />
                    <SidebarChat />                    
                    <SidebarChat />                    
                </div>
            
            </div>
            </div>
          </div>

        )

    }
}



export default Sidebar;