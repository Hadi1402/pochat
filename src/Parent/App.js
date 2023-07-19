import React from "react";
import ChatSidebar from "./chat";
import RegisterUserPage from "../Parent/registeruser.js"
//import LoginSet from "./login";
import {Switch, Route , Router, BrowserRouter } from "react-router-dom";
import LoginSet from "./login.js";
import AdminDashbord from "./admin_dashbord";
import Home from "../Component/pochat";
import SupportUser from "./supportUser"
import Sidebar from "./supportUser";
import User from "./user"
import webSite from "./webSite";
import Group from "./group";
import EditGroup from "./editGroup";
import CreateGroup from "./createGroup";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/"              component={Home}             />{/* no */}
          <Route exact path="/login"         component={LoginSet}         />{/* finish */}
          <Route exact path='/RegisterUser'  component={RegisterUserPage} />{/* finish */}
          <Route exact path='/supportuser'   component={SupportUser}      />{/* almost finish */}
          <Route exact path='/adminDashbord' component={AdminDashbord}    />{/* no idea */}
          <Route exact path='/user'          component={User}             />{/* finished */}
          <Route exact path='/website'       component={webSite}          />{/* finished */}
          <Route exact path='/group'         component={Group}            />{/* finished */}
          <Route exact path='/editgroup'     component={EditGroup}        />{/* no */}
          <Route exact path='/creategroup'   component={CreateGroup}      />{/* finished */}

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


