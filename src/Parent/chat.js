
import React from 'react';
import "../static/css/chat.css";
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon  from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { InsertEmoticon } from '@material-ui/icons';
import { MicNone } from '@material-ui/icons';
import { useState } from 'react';
import { useRef } from 'react';




class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
    this.btn_send = React.createRef();
    this.MicNone = React.createRef();
    this.state = {
      input:"",
      btn_send_display: "none",
      MicNone :"block"
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.onChange = this.onChange.bind(this)

  }
    

  

  sendMessage(e){
    e.preventDefault();
    console.log(" your message:" , this.state.input)
 //   this.setState({value:e.target.value}).push(<p> {value} </p>)
  //  this.state.value.push(<p> {value} </p>) 
     
  }

   

  
  onChange (e){
    console.log("inja")

    const inputt = this.inputRef.current.value;
    const btn_send = this.btn_send.current;
    const MicNone = this.MicNone.current;
    console.log(inputt,btn_send)
    if(inputt != "") {
      this.setState({btn_send_display:'block'})
       this.setState({MicNone:'none'})
      }
       else
       {
      this.setState({btn_send_display:'none'})
      this.setState({MicNone:'block'})
    }
    }
  
   // if(this.inputRef.value == '') {this.btn_send.}

  


 
  render(){

  return(
    <div className='chat'>
      <div className='chat_header'>
        <Avatar/>

        <div className='chat_headerInfo'>
          <h3> Room name</h3>
          <p> last seen ....</p>
        </div>

        <div className='chat_headerRight'>
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

      </div>


      <div className='chat_body'>

      
      
      </div>

      <div className='chat_footer'>
        <form>
      <button  ref={this.btn_send} onClick={this.sendMessage} style={{ "display": this.state.btn_send_display }}
      type="submit">  ارسال  </button>
        <MicNone style={{"display": this.state.MicNone}} />
         <input  ref={this.inputRef} onChange={this.onChange} placeholder="پیام خود را تایپ کنید " type="text"/>
     

        </form>

          <InsertEmoticon />
       
    </div>


    </div>
  )

      }
      }
  export default Chat;