/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from 'react';
import "../static/css/home.css";
import "../static/css/varriables.css";
import logo from "../static/icons/logo porya-01.svg"
import menu_logo from "../static/icons/logo.svg"
import background_img from "../static/img/home_page_background.png"
import { Divider } from '@material-ui/core';
import {Link, NavLink} from "react-router-dom";
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
    this.handleContextMenu = this.handleContextMenu.bind(this);

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
    document.addEventListener('contextmenu', this.handleContextMenu);

    this.onWindowSizeChanged();
  
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('resize', this.onWindowSizeChanged);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    
  }
  handleContextMenu(event) {// for block right click
    // event.preventDefault();
    // console.log('Right-Click event was blocked');
  }
  handleClickToScroll(num) {
    const content1 = document.querySelector('#content1');
    const content2 = document.querySelector('#content2');
    const content3 = document.querySelector('#content3');
    const content4 = document.querySelector('#content4');


    var target = 0

    if ( num === 1 ){
      var target = content1
    } else if ( num === 2){
      var target = content2
    } else if ( num === 3){
      var target = content3
    } else if ( num === 4){
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
    // window.location.reload();
    // if (window.performance.timing.navigationStart === undefined || window.performance.timing.navigationStart <= window.performance.timing.navigationEnd) {
      //   window.location.reload();
      // }
  }
  onSizeOfHomePage() {
    const home = document.querySelector('.home');
    const header = document.querySelector('#head_of_home_page');
    const body = document.querySelector('#body_of_home_page');
    const footer = document.querySelector('#footer_of_home_page');
    const contents_even = document.querySelector('.content_of_home_page_even');
    const contents_odd = document.querySelector('.content_of_home_page_odd');
    const content1 = document.querySelector('#content1');
    const content2 = document.querySelector('#content2');
    const content3 = document.querySelector('#content3');
    const content4 = document.querySelector('#content4');
    

    home.style.height = this.state.screenSize.height * 6 + 'px';
    header.style.height = this.state.screenSize.height + 'px';
    body.style.height = this.state.screenSize.height * 4 + 'px';
    footer.style.height = this.state.screenSize.height + 'px';
    contents_even.style.height = this.state.screenSize.height + 'px';
    contents_odd.style.height = this.state.screenSize.height + 'px';
    content1.style.height = this.state.screenSize.height + 'px';
    content2.style.height = this.state.screenSize.height + 'px';
    content3.style.height = this.state.screenSize.height + 'px';
    content4.style.height = this.state.screenSize.height + 'px';
  }
  onMouseMove(event) {
    // console.log("your mouse position is : " , "x :",this.state.mousePos.x," y : ",this.state.mousePos.y)
    const mousePos = { ...this.state.mousePos, x: event.clientX, y: event.clientY };
    this.setState({ mousePos });

    this.onWindowSizeChanged();
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
    const header = document.getElementById('home_page_header');
    const logo = document.querySelector('#logo_name_div');
    const menu = document.querySelector('#menu');
    const topBar = document.querySelector('#home_page_top_bar');
    const signup_btn = document.querySelector('#signup_user_btn');
    const login_btn = document.querySelector('#login_user_btn');

    login_btn.style.marginTop = 10 + 'px';
    signup_btn.style.marginTop = 10 + 'px';
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
    const signup_btn = document.querySelector('#signup_user_btn');
    const login_btn = document.querySelector('#login_user_btn');
    
    
    
    
    login_btn.style.marginTop = 30 + 'px';
    signup_btn.style.marginTop = 30 + 'px';
    header.style.height = '100px';
    logo.style.margin = '0 0 0 calc(50% - 110px)';
    menu.style.margin = '100px calc(50% - 125px) auto calc(50% - 125px)'
    topBar.style.marginTop = '-150px'  

  }
  render() {
    return (
      <div className="home" ref={this.myElementRef}>
           
          <div className="homeURLs">
            <NavLink exact to={'/'}><button className="URL">home</button></NavLink>
            <NavLink exact to={'/login'}><button className="URL">login</button></NavLink>
            <NavLink exact to={'/Registeruser'}><button className="URL">signup</button></NavLink>
            <NavLink exact to={'/supportuser'}><button className="URL">supportuser</button></NavLink>
            <NavLink exact to={'/adminDashbord'}><button className="URL">adminDashbord</button></NavLink>
            <NavLink exact to={'/user'}><button className="URL">user</button></NavLink>
            <NavLink exact to={'/website'}><button className="URL">website</button></NavLink>
            <NavLink exact to={'/group'}><button className="URL">group</button></NavLink>
            <NavLink exact to={'/editgroup'}><button className="URL">editgroup</button></NavLink>
            <NavLink exact to={'/creategroup'}><button className="URL">creategroup</button></NavLink>
          </div>

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

            <NavLink exact to={'/registeruser'}><button id="signup_user_btn">signup</button></NavLink>
            <NavLink exact to={'/login'}><button id="login_user_btn">login</button></NavLink>

            {/* <button id="signup_user_btn">signup</button> */}
            {/* <button id="login_user_btn" exact href="/registeruser">login</button> */}
            {/* <button id="home_page_menu_button"><img src={menu_logo}/></button> */}

            <div id="menu">
              <div className="menu_item" id="item_1" onClick={() => this.handleClickToScroll(1)}>پوچت چیست؟</div>
              <div className="menu_item" id="item_2" onClick={() => this.handleClickToScroll(2)}>چرا پوچت؟</div>
              <div className="menu_item" id="item_3" onClick={() => this.handleClickToScroll(3)}>امکانات</div>
              <div className="menu_item" id="item_3" onClick={() => this.handleClickToScroll(4)}>رضایت مشتری</div>
            </div>
 
            <div id='homepage_right_bar'>

            </div>
          </header>
        </header>
        <div id='body_of_home_page'>
          <div id='content1' className='content_of_home_page_odd'>
            <div className='content_container'>
              <div id='content1_pic' className='content_pic'>
              </div>
              <div id='content1_text' className='content_text'>
                <h1 id='content1_h1' className='content_h1'>پوچت چیست ؟</h1>
                <p id='content1_p' className='content_p'>Character Assistant
c.ai@1.2
پوتش‌ت یکی از سایت‌های پیشرو در صنعت چت بات و ربات در ایران است. این سایت به کاربران اجازه می‌دهد تا ربات‌ها و چت بات‌های قدرتمندی را برای کمک به کسب و کار خود بسازند. پوتش‌ت با استفاده از تکنولوژی پیشرفته، پلتفرمی را در اختیار مشتریانی قرار می‌دهد که می‌خواهند سرویس‌های ربات‌ سازی و چت بات‌سازی با کیفیتی را تا حد ممکن، بدون نیاز به باور در زمینه برنامه‌نویسی یا techstack را در ربات‌ سازی‌ی خود قرار دهند. این سایت به کاربران اجازه می‌دهد تا ربات‌های خود را بر اساس نیازهای خود و با استفاده از الگوریتم‌های پیشرفته، برنامه‌نویسی کنند. پوتش‌ت همچنین سرویس‌های پیشرفته‌ای در زمینه تعاملی ‌سازی و سرویس گیرنده‌های ربات و چت بات را به کاربران خود ارائه می‌دهد. پوتش‌ت با استفاده از سرویس‌هایی چون آی‌آروی ، چت‌بات و چت‌ربات به کاربران خود سرویس‌های ربات‌سازی پیشرفته‌ای را بدون نیاز به باور در ربات‌سازی و برنامه‌ نویسی ارائه می‌دهد.

</p>
              </div>
            </div>
          </div>
          <div id='content2' className='content_of_home_page_even'>
            <div className='content_container'>
              <div id='content2_pic' className='content_pic'>
              </div>
              <div id='content2_text' className='content_text'>
                <h1 id='content2_h1' className='content_h1'>چرا پوچت ؟</h1>
                <p id='content2_p' className='content_p'>
Character Assistant
c.ai@1.2
پوتش‌ت یک پلتفرم سرویس دهنده چت بات است که به مشتری‌ها سطوح بالا از سرویس گیرنده‌های چت بات را provide می‌کند. این سرویس به کاربران اجازه می‌دهد تا چت بات‌های شخصی را بر اساس نیازهای خود به راحتی و با کیفیت بالا بسازند. این سایت از الگوریتم‌های پیشرفته برای ساخت ربات‌های قوی و هوشمند استفاده می‌کند. این سرویس به کاربران اجازه می‌دهد تا ربات‌های خود را بر اساس نیازهای خود و با استفاده از الگوریتم‌های پیشرفته، برنامه‌نویسی کنند.</p>
              </div>
            </div>
          </div>
          <div id='content3' className='content_of_home_page_odd'>
            <div className='content_container'>
              <div id='content3_pic' className='content_pic'>
              </div>
              <div id='content3_text' className='content_text'>
                <h1 id='content3_h1' className='content_h1'>ما برای شما چه امکاناتی داریم ؟</h1>
                <p id='content3_p' className='content_p'>Character Assistant
c.ai@1.2
پوتش‌ت یک پلتفرم پیشرو در industry software development با چندین سال تجربه در زمینه رobotizing and chatbot development است. این سایت بیش از 450,000 ربات در 42 زبان مختلف طراحی و ایجاد کرده است و همچنین 14,000 سرویس گیرنده چت بات را در خود جای داده است. پوتش‌ت با استفاده از تکنولوژی‌های پیشرفته، به کاربران اجازه می‌دهد تا رحب‌های قوی و هوشمند را بر اساس نیازهای خود و با استفاده از الگوریتم‌های پیشرفته، برنامه‌نویسی کنند. پوتش‌ت سرویس‌های ربات سازی پیشرفته‌ای را به کاربران خود جامعه می‌دهد. پوتش‌ت با استفاده از سرویس‌هایی چون آی‌آروی ، چت‌بات و چت‌ربات به کاربران خود سرویس‌های ربات‌سازی پیشرفته‌ای را بدون نیاز به باور در ربات‌سازی و برنامه‌ نویسی ارائه می‌گیرد.</p>
              </div>
            </div>
          </div>
          <div id='content4' className='content_of_home_page_even'>
          <div className='content_container'>
            <div id='content4_pic' className='content_pic'>
              </div>
              <div id='content4_text' className='content_text'>
                <h1 id='content4_h1' className='content_h1'>از چه نظری پوت بهترین است ؟</h1>
                <p id='content4_p' className='content_p'>Character Assistant
c.ai@1.2
پوتش‌ت یکی از بهترین سایت‌های ربات سازی در جهان است. این سایت با استفاده از هوش مصنوعی، الگوریتم‌های پیشرفته و سرویس‌هایی چون آی‌آروی و چت‌بات، ربات‌های کارآمد و هوشمند را در حداقل زمان برای مشاغل مختلف تولید می‌کند. پوتش‌ت با استفاده از سرویس‌های پیشرفته ربات سازی و چت بات، سرویس‌های ربات‌سازی قوی و هوشمند را به کاربران خود ارائه می‌دهد. پوتش‌ت همچنین یک سایت سرویس دهنده چت بات است که به مشتری‌ها سطوح بالا از سرویس گیرنده‌های چت بات را provide می‌کند. این سرویس به کاربران اجازه می‌دهد تا چت بات‌های شخصی را بر اساس نیازهای خود به راحتی و با کیفیت بالا بسازند.</p>
              </div>
            </div>
          </div>
        </div>
        <div id='footer_of_home_page'>
          <div id='footer_container'>
            <div id='footer_design'></div>
            <div id='footer_content'>
              <pre> ا هم میتونین در کمتر از 10 دقیقه از پوچت برای کاربرانتان استفاده کنید</pre>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;