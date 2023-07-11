import React, { Component } from 'react';
import "../static/css/home.css";
import "../static/css/varriables.css";
import logo from "../static/icons/logo porya-01.svg"
import menu_logo from "../static/icons/logo.svg"
import {Link, NavLink} from "react-router-dom";
import HomeSideBar from "../Parent/home-sidebar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.myElementRef = React.createRef();
    this.state = {
      positionTop: 0,
      positionLeft: 0
    };
  }

  handleContextMenu(e) {
    e.preventDefault();
  }

  componentDidMount() {
    const element = this.myElementRef.current;
    element.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    const element = this.myElementRef.current;
    element.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const el = this.myElementRef.current;
    this.setState({
      positionTop: el.scrollTop,
      positionLeft: el.scrollLeft
    });
  }

  handleMenuButtons() {
    console.log('handleMenuButtons called');
    const menu_buttons = document.getElementsByClassName('menu_item');
    
    function menu_button_click() {
      // toggle the 'active' class on the clicked menu item
      this.classList.toggle('active');
    }
  
    // attach the click event listener to all menu items
    for (let i = 0; i < menu_buttons.length; i++) {
      menu_buttons[i].addEventListener('click', menu_button_click);
    }
  }

  render() {
    return (
      <div className="home" ref={this.myElementRef}>
        <header>
          <div id="logo_name_div">
            <div id="logo_div">
              <img className="logo" alt="pochat logo" src={logo} draggable="false" onContextMenu={this.handleContextMenu}/>
            </div>
            <p id="logo_name">Po chat</p>
            <div>
              
            </div>
          </div>
          <button id="signup_user_btn">signup</button>
          <button id="home_page_menu_button"><img src={menu_logo}/></button>
          <div id="home_page_menu">

          </div>
        </header>
        <div id="menu">
          <div className="menu_item" id="item_1"></div>
          <div className="menu_item" id="item_2"></div>
          <div className="menu_item" id="item_3"></div>
          <div className="menu_item" id="item_4"></div>
        </div>
      </div>
    );
  }
}

export default Home;