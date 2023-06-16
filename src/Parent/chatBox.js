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
import { BrandingWatermark } from "@material-ui/icons";




class ChatBox extends React.Component {
    constructor(){
       super(); 

  this.click1 = this.click1.bind(this)
   
    }

       

   // var id  = 1
    //var e = $("<div><p data-id="+ id +">"+ inputtext + "</p></div>")
  
    //$('#maseg').append(e);
    
  //  $('#maseg').append($("</br>"));

    HandleKeyDown = (event) => {  
      if (event.key === 'Enter') {

        var inputtext=document.getElementById("inputt");
        var  maseeg=document.getElementsByClassName('maseg')[0]
        ReactDOM.findDOMNode(maseeg).append(ReactDOM.findDOMNode(inputtext).value)
        const br = document.createElement("br")
       ReactDOM.findDOMNode(maseeg).append(br)
        ReactDOM.findDOMNode(inputtext).value= ' ';



        
      }
    };
    

    click1()
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
       <img className="imgclose" src={close} onClick={this.click1} />
     
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