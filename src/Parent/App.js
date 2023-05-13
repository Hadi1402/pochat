import React from "react";
import ChatSidebar from "./chat";
import RegisterUserPage from "../Parent/registeruser.js"
import LoginSet from "./login";
import HomeChat from "../Parent/homeChat";
import {Switch, Route , Router, BrowserRouter } from "react-router-dom";
import AdminDashbord from "./admin_dashbord";
import Home from "../Componnet/pochat";
import SupportUser from "./supportUser"
import Sidebar from "./supportUser";
import ChatBox from "./chatBox";






function App() {
  return (

     
     <div className="App">
        {/* <Home/> */}
        {/* <AdminDashbord/> */}
   <BrowserRouter>   
   <Switch>
   <Route exact path="/"  component={Home} >
   </Route>
   <Route exact path="/login" component={LoginSet}  />
   <Route exact path='/RegisterUser'  component={RegisterUserPage} />
   <Route exact path='/supportuser' component={SupportUser}/>
   </Switch>
   </BrowserRouter> 

    </div>
     
  
     
     );
}

export default App;


/* 
<Switch>
<Route exact path="/"  component={Home} />
<Route exact path="/login" component={LoginSet}  />
<Route exact path='/RegisterUser'  component={RegisterUserPage} />
</Switch> */

