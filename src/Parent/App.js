import React from "react";
import ChatSidebar from "./chat";
import RegisterUserPage from "../Parent/registeruser.js"
//import LoginSet from "./login";
import {Switch, Route , Router, BrowserRouter } from "react-router-dom";
import LoginSet from "./login.js";
import AdminDashbord from "./admin_dashbord";
import Home from "../Componnet/pochat";
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
   <Route exact path="/"  component={Home} />
   <Route exact path="/login" component={LoginSet}  />
   <Route exact path='/RegisterUser'  component={RegisterUserPage} />
   <Route exact path='/supportuser' component={SupportUser}/>
   <Route exact path='/adminDashbord' component={AdminDashbord}/>
   <Route exact path='/user' component={User}/>
   <Route exact path='/website' component={webSite}/>
   <Route exact path='/group' component={Group}/>
   <Route exact path='/editgroup' component={EditGroup}/>
   <Route exact path='/creategroup' component={CreateGroup}/>



   
   </Switch>
   </BrowserRouter>

    </div>
     
  
     
     );
}

export default App;


