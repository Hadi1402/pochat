/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from 'react';
import "../static/css/home.css";
import "../static/css/varriables.css";
import logo from "../static/icons/logo porya-01.svg"
import menu_logo from "../static/icons/logo.svg"
import background_img from "../static/img/home_page_background.png"
import { Divider } from '@material-ui/core';
// import {Link, NavLink} from "react-router-dom";
// import HomeSideBar from "../Parent/home-sidebar";
// import Animate from 'animate.css';


class Home extends Component {
  constructor(props) {
    super(props);
    // ///////////////////////////////////// state
    this.state = {
      scrollTop: 0,
      screenSize:{
        width: window.innerWidth,
        height: window.innerHeight
      },
      mousePos: {
        x: 0,
        y: 0
      },
    };
    // ///////////////////////////////////// state
    this.handleScroll = this.handleScroll.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onWindowSizeChanged = this.onWindowSizeChanged.bind(this);
    window.addEventListener('resize', this.onWindowSizeChanged);

    this.content1Ref = React.createRef();
    this.content2Ref = React.createRef();
    this.content3Ref = React.createRef();
    this.content4Ref = React.createRef();

  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('resize', this.onWindowSizeChanged);

    this.onWindowSizeChanged()
  
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('resize', this.onWindowSizeChanged);
    
  }
  handleClickToScroll(num) {
    console.log("clicked")
    console.log(num)

    const content1 = document.querySelector('#content1');
    const content2 = document.querySelector('#content2');
    const content3 = document.querySelector('#content3');
    const content4 = document.querySelector('#content4');

    var target = 0

    if ( num == 1 ){
      var target = content1
    } else if ( num == 2){
      var target = content2
    } else if ( num == 3){
      var target = content3
    } else if ( num == 4){
      var target = content4
    } 
    
    window.scrollTo({
      top: target.offsetTop, 
      left: target.offsetLeft, 
      behavior: 'smooth' 
    });
  }
  onWindowSizeChanged() {
    var displayWidth = window.innerWidth || window.clientWidth;
    var displayHeight = window.innerHeight || window.clientHeight;
    
    this.setState({
      screenSize: {
        width: displayWidth,
        height: displayHeight
      }
    });
    
    this.onSizeOfHomePage()
    
    this.setState({
      screenSize: {
        width: displayWidth,
        height: displayHeight
      }
    });
  }
  onSizeOfHomePage() {
    const home = document.querySelector('.home');
    const header = document.querySelector('#head_of_home_page');
    const body = document.querySelector('#body_of_home_page');
    const footer = document.querySelector('#footer_of_home_page');
    const contents = document.querySelector('.content_of_home_page');
    const content1 = document.querySelector('#content1');
    const content2 = document.querySelector('#content2');
    const content3 = document.querySelector('#content3');
    const content4 = document.querySelector('#content4');
    

    home.style.height = this.state.screenSize.height * 6 + 'px';
    header.style.height = this.state.screenSize.height + 'px';
    body.style.height = this.state.screenSize.height * 4 + 'px';
    footer.style.height = this.state.screenSize.height + 'px';
    contents.style.height = this.state.screenSize.height + 'px';
    content1.style.height = this.state.screenSize.height + 'px';
    content2.style.height = this.state.screenSize.height + 'px';
    content3.style.height = this.state.screenSize.height + 'px';
    content4.style.height = this.state.screenSize.height + 'px';
  }
  onMouseMove(event) {
    // console.log("your mouse position is : " , "x :",this.state.mousePos.x," y : ",this.state.mousePos.y)
    const mousePos = { ...this.state.mousePos, x: event.clientX, y: event.clientY };
    this.setState({ mousePos });
  }
  handleScroll(event) {
    const scrollTop = window.scrollY;

    this.setState({ scrollTop:scrollTop });
  
    if (scrollTop > 150) {
      this.handleHeaderHide();
    }

    if (scrollTop < 150) {
      this.handleHeaderShow();
    }
  }
  handleHeaderHide() {
    // console.log("reached to more than 150");
  
    const header = document.getElementById('home_page_header');
    const logo = document.querySelector('#logo_name_div');
    const menu = document.querySelector('#menu');
    const topBar = document.querySelector('#home_page_top_bar');
    
    header.style.height = '100px';
    logo.style.margin = '0 0 0 0';
    menu.style.margin = '15px calc(50% - 125px) auto calc(50% - 125px)'
    topBar.style.marginTop = '0px'    

    
    
  } 
  handleHeaderShow() {
    // console.log("reached to less than 150");
    
    const header = document.getElementById('home_page_header');
    const logo = document.querySelector('#logo_name_div');
    const menu = document.querySelector('#menu');
    const topBar = document.querySelector('#home_page_top_bar');

  
    
    
    header.style.height = '100px';
    logo.style.margin = '0 0 0 calc(50% - 110px)';
    menu.style.margin = '100px calc(50% - 125px) auto calc(50% - 125px)'
    topBar.style.marginTop = '-150px'  

  }
  render() {
    return (
      <div className="home" ref={this.myElementRef}>
        <header id='head_of_home_page'>
          <header id='home_page_header'>

            <div id='status'>
              <h5> position from top is : {this.state.scrollTop}</h5>
              <h5> position mouse x is : {this.state.mousePos.x}</h5>
              <h5> position mouse y is : {this.state.mousePos.y}</h5>
              <h5> width of your window is : {this.state.screenSize.width}</h5>
              <h5> height of your window is : {this.state.screenSize.height}</h5>
            </div>

            <div id='home_page_top_bar'>
            </div>

            <div id="logo_name_div">
              <div id="logo_div">
                <img className="logo" alt="pochat logo" src={logo} draggable="false" onContextMenu={this.handleContextMenu}/>
              </div>
              <p id="logo_name">Po chat</p>
            </div>

            <button id="signup_user_btn">signup</button>
            <button id="home_page_menu_button"><img src={menu_logo}/></button>

            <div id="menu">
              <div className="menu_item" id="item_1" onClick={() => this.handleClickToScroll(1)}>content 1</div>
              <div className="menu_item" id="item_2" onClick={() => this.handleClickToScroll(2)}>content 2</div>
              <div className="menu_item" id="item_3" onClick={() => this.handleClickToScroll(3)}>content 3</div>
              <div className="menu_item" id="item_3" onClick={() => this.handleClickToScroll(4)}>content 4</div>
            </div>
 
          </header>
        </header>
        <div id='body_of_home_page'>
          <div id='content1' className='content_of_home_page'>
            here is content 1
          </div>
          <div id='content2' className='content_of_home_page'>
            here is content 2
          </div>
          <div id='content3' className='content_of_home_page'>
            here is content 3
          </div>
          <div id='content4' className='content_of_home_page'>
            here is content 4
          </div>
        </div>
        <div id='footer_of_home_page'>
          <div id='footer_container'>
            <div id='footer_design'></div>
            <div id='footer_content'>
              شما هم میتونین در کمتر از 10 دقیقه از پوچت برای کاربرانتان استفاده کنید 
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;