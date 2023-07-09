/* eslint-disable no-useless-constructor */
import React from "react";
import "../static/css/home.css";
import "../static/css/varriables.css";
import logo from "../static/icons/logo porya-01.svg"
import {Link, NavLink} from "react-router-dom";
import HomeSideBar from "../Parent/home-sidebar";

class Home extends React.Component {

    
    constructor(props){
        super(props);
        this.handleContextMenu = this.handleContextMenu.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        this.handleMenuButtons = this.handleMenuButtons.bind(this)
        this.state = {top: 0}
    }
    
    handleContextMenu(e) {
        e.preventDefault();
    }

    handleScroll = () => {
        this.setState({ count: this.state.top + 1 });
        console.log(this.state.top);
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleMenuButtons();
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
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

    render()
    {
        return(
            <div className="home">
        <header>
            <button id="signup_user_btn">signup</button>
            <div id="logo_name_div">
                <div id="logo_div">
                    <img className="logo" alt="pochat logo" src={logo} draggable="false" onContextMenu={this.handleContextMenu}/>
                </div>
                <p id="logo_name">Po chat</p>
                <div>
                    
                </div>
            </div>
        </header>
        <div id="menu">
                <div className="menu_item" id="item_1"></div>
                <div className="menu_item" id="item_2"></div>
                <div className="menu_item" id="item_3"></div>
                <div className="menu_item" id="item_4"></div>
        </div>
    </div>
    )
  }
}

export default Home;