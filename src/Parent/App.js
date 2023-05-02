import React from "react";
import Chat from "../Componnet/chat";
import RegisterUserPage from "../Parent/registeruser.js"
//import LoginSet from "./login";
import HomeChat from "../Parent/homeChat"
import {Switch, Route , Router, BrowserRouter } from "react-router-dom";
import LoginSet from "./login.js";
import AdminDashbord from "./admin_dashbord";
import Home from "../Componnet/pochat";
import SupportDashbord from "./support_dashbord"
import Sidebar from "./sidebar";




function App() {
  return (

     <BrowserRouter>
       <div className="App">
      
         <Sidebar/>
         
  
       </div>
     </BrowserRouter>
     );
}

export default App;


/*
<Switch>
<Route exact path="/"  component={Home} />
<Route exact path="/login" component={LoginSet}  />
<Route exact path='/RegisterUser'  component={RegisterUserPage} />
</Switch> */

