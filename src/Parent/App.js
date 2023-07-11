import React from "react";
import ChatSidebar from "./chat";
import RegisterUserPage from "../Parent/registeruser.js"
import HomeChat from "../Parent/homeChat"
import {Switch, Route , Router, BrowserRouter } from "react-router-dom";
import LoginSet from "./login.js";
import AdminDashbord from "./admin_dashbord";
import Home from "../Component/pochat";
import SupportUser from "./supportUser"
import Sidebar from "./supportUser";
import ChatBox from "./chatBox";
import User from "./user"
import webSite from "./webSite";
import Group from "./group";
import EditGroup from "./editGroup";
import "../static/css/varriables.css";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/"  component={Home} />                           {/* working on it */}
      <Route exact path="/login" component={LoginSet}  />                  {/* finished */}
      <Route exact path='/RegisterUser'  component={RegisterUserPage} />   {/* finished */}
      <Route exact path='/supportuser' component={SupportUser}/>           {/* need a little bit work */}
      <Route exact path='/adminDashbord' component={AdminDashbord}/>       {/* no */}
      <Route exact path='/user' component={User}/>                         {/* no */}
      <Route exact path='/website' component={webSite}/>                   {/* no */}
      <Route exact path='/group' component={Group}/>                       {/* no */}
      <Route exact path='/editgroup' component={EditGroup}/>               {/* no */}

      </Switch>
      </BrowserRouter>
    </div>
     );
}

export default App;


