
import React from 'react';
import ReactDOM from 'react-dom';
import "../static/css/chat.css";
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon  from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { InsertEmoticon } from '@material-ui/icons';
import { MicNone } from '@material-ui/icons';
import { useState } from 'react';
import { useRef } from 'react';
import {findDOMNode} from 'react-dom';





class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
    this.btn_send = React.createRef();
    this.MicNone = React.createRef();
    this.state = {
      input:"",
      btn_send_display:"none",
      MicNone :"block",
      p_display:"none"
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.onChange = this.onChange.bind(this)

  }
    

  sendMessage(e){
    e.preventDefault();
    console.log(" your message:" , this.state.input)
    const time_system=new Date().toLocaleString()
    this.setState({p_display:"block"})
    const inputt = this.inputRef.current.value;
    const br = document.createElement("br")
    var mass = document.getElementsByClassName('chat_message')[0];
    ReactDOM.findDOMNode(mass).append(inputt);
    ReactDOM.findDOMNode(mass).append(time_system);
    ReactDOM.findDOMNode(mass).append(br);

  
/*
   const new_p = document.createElement("p");
   ReactDOM.findDOMNode(mass).appendChild(new_p);
   new_p.className = "chat_message";
  */
    
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
 
  render(){

  return(
    <div className='chat'>
      <div className='chat_header'>
        <Avatar/>

        <div className='chat_headerInfo'>
          <h3> user name ... </h3>
          <p> last visit .... </p>
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

      <p className='chat_message'  style={{"display":this.state.p_display}}>  </p>
      </div>

      <div className='chat_footer'>
        <form>
      <button  ref={this.btn_send} onClick={this.sendMessage} style={{ "display": this.state.btn_send_display}}
      type="submit">  ارسال  </button>
        <MicNone className='MicNone' style={{"display": this.state.MicNone}} />
         <input ref={this.inputRef} style={{'value':this.state.input}} onChange={this.onChange} placeholder="پیام خود را تایپ کنید " type="text"/>
     

        </form>

          <InsertEmoticon />
       
    </div>


    </div>
  )

      }
      }
  export default Chat;