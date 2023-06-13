import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import close from "../static/img/close1.jpg";
import { connect } from "react-redux";
import dispalyBox from "../Actions/displayChatbox";
import HomeChat from "./homeChat";
import "../static/css/chat.css";
import Sidebar from "./supportUser";
import Chat from "./chat"




class ChatBox extends React.Component {
    constructor(){
       super(); 
    }


    HandleKeyDown = (event) => {  
      if (event.key === 'Enter') {
       // var id  = 1
       // var e = ("<div>  data-id="+ id +">"+ inputtext + "</div>")
       // var b = (" <br> </br> ")
        var inputtext=document.getElementById("inputt");
        var  maseeg=document.getElementsByClassName('maseg')[0]
        ReactDOM.findDOMNode(maseeg).append(ReactDOM.findDOMNode(inputtext).value);
        ReactDOM.findDOMNode(inputtext).value= ' ';
      }
    };
    

    click()
      {
     this.props.dispatch(dispalyBox(this.props.display))
      }


    render() {
      var chatHome = undefined
      var sideBar = undefined
      if (this.props.display == "block") {
        chatHome = <HomeChat> </HomeChat>
        sideBar = <Sidebar></Sidebar>
      }


    return(
      <div className="box">  
       <div className="boxtop"> 
      </div>
        <input id='inputt' type={Text}  onKeyDown={this.HandleKeyDown} /> 
        <snap className="maseg">    </snap>
      </div> 
/*
      <div className="dashbord_user_app"> 
       
        <div className="dashbord_user_body">
      //   {sideBar}
       //   {Chat}

      //  </div>   
      
    //  </div>
*/
        )
    }

}


function mapDispatchToProps(state) {
  return {display:state.display}
  }


export default connect(mapDispatchToProps)(ChatBox);






// div.box 
//<img className="imgclose" src={close} onClick={this.click} style={{display:this.props.display}}  /> 
// {chatHome}