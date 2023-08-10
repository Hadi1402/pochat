/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from 'react';
import "../static/css/home.css";
import "../static/css/varriables.css";
import logo from "../static/icons/logo porya-01.svg"
import menu_logo from "../static/icons/logo.svg"
import background_img from "../static/img/home_page_background.png"
// import {Link, NavLink} from "react-router-dom";
// import HomeSideBar from "../Parent/home-sidebar";
// import Animate from 'animate.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
      screenSize:{
        width: 0,
        height: 0
      },
      mousePos: {
        x: 0,
        y: 0
      },
      displayHeight: 0,
      displayWidth: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onWindowSizeChanged = this.onWindowSizeChanged.bind(this);
    window.addEventListener('resize', this.onWindowSizeChanged);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('resize', this.onWindowSizeChanged);


    this.onWindowSizeChanged = this.onWindowSizeChanged.bind(this)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('resize', this.onWindowSizeChanged);
    
  }

  handleClickToScroll() {
    console.log("clicked")

    const content = document.querySelector('#content');

    window.scrollTo({
      top: content.offsetTop, 
      left: content.offsetLeft, 
      behavior: 'smooth' 
    });

  }
    
  onWindowSizeChanged() {
    const displayWidth = window.innerWidth || window.clientWidth;
    const displayHeight = window.innerHeight || window.clientHeight;
    
    this.setState({
      displayWidth,
      displayHeight,
    });
    
    this.onHeightOfHomePage()
  }

  onHeightOfHomePage() {
    const home = document.querySelector('.home');
    const header = document.querySelector('#head_of_home_page');
    

    header.style.height = this.state.displayHeight + 'px'
    home.style.height = this.state.displayHeight * 6 + 'px'
  }

  onMouseMove(event) {
    // console.log("your mouse position is : " , "x :",this.state.mousePos.x," y : ",this.state.mousePos.y)
    const mousePos = { ...this.state.mousePos, x: event.clientX, y: event.clientY };
    this.setState({ mousePos });
  }


  handleScroll(event) {
    const scrollTop = window.scrollY;
    this.setState({ scrollTop });
  
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

    const { mousePos, width, height, displayWidth, displayHeight } = this.state;


    return (
      <div className="home" ref={this.myElementRef}>
        
        <header id='head_of_home_page'>
          <header id='home_page_header'>

            <div id='status'>
              <h5> position from top is : {this.state.scrollTop}</h5>
              <h5> position mouse x is : {this.state.mousePos.x}</h5>
              <h5> position mouse y is : {this.state.mousePos.y}</h5>
              <h5> width of your window is : {this.state.displayWidth}</h5>
              <h5> height of your window is : {this.state.displayHeight}</h5>
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
              <div className="menu_item" id="item_1" onClick={this.handleClickToScroll}>menu_1</div>
              <div className="menu_item" id="item_2">menu_2</div>
              <div className="menu_item" id="item_3">menu_3</div>
              <div className="menu_item" id="item_4">menu_4</div>
            </div>

          </header>
        </header>

        <tbody id='body_of_home_page'>
          <h1>this is tbody</h1>
          <h1>this is tbody</h1>
          <h1>this is tbody</h1>
          <h1>this is tbody</h1>
        </tbody>


        <div id='content'>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
        </div>

      </div>
    );
  }
}

export default Home;