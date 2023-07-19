/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from 'react';
import "../static/css/home.css";
import "../static/css/varriables.css";
import logo from "../static/icons/logo porya-01.svg"
import menu_logo from "../static/icons/logo.svg"
// import {Link, NavLink} from "react-router-dom";
// import HomeSideBar from "../Parent/home-sidebar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    console.log(this.state.scrollTop);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    console.log(this.state.scrollTop);
    window.removeEventListener('scroll', this.handleScroll);
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

  handleHeaderHide(){
    console.log("reached to moe than 150")
    
    const header = document.getElementById('homepageheader');
    const logo = document.querySelector('#logo_name_div')


    header.style.height = 100 + 'px';
    logo.style.margin = 'auto 100% auto 0'

  }
  handleHeaderShow(){
    console.log("reached to less than 150")
    
    const header = document.getElementById('homepageheader');
    const logo = document.querySelector('#logo_name_div');

    header.style.height = 150 + 'px';
    logo.style.margin = 'auto'

  }


  render() {
    return (
      <div className="home" ref={this.myElementRef}>
        <header id='homepageheader'>
          <b>{this.state.scrollTop}</b>

          <div id="logo_name_div">
            <div id="logo_div">
              <img className="logo" alt="pochat logo" src={logo} draggable="false" onContextMenu={this.handleContextMenu}/>
            </div>
            <p id="logo_name">Po chat</p>
          </div>
          <button id="signup_user_btn">signup</button>
          <button id="home_page_menu_button"><img src={menu_logo}/></button>

          <div id="menu">
            <div className="menu_item" id="item_1">menu_1</div>
            <div className="menu_item" id="item_2">menu_2</div>
            <div className="menu_item" id="item_3">menu_3</div>
            <div className="menu_item" id="item_4">menu_4</div>
          </div>

        </header>

        <div id='content'>
          <p>1</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </div>


      </div>
    );
  }
}

export default Home;