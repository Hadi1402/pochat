import React from "react";
import Chat from "../Componnet/chat";
import RegisterUserPage from "../Parent/registeruser.js"
//import LoginSet from "./login";
//import HomeChat from "../Parent/homeChat"
import {Switch, Route , Router, BrowserRouter } from "react-router-dom";
import LoginSet from "./login.js";
import AdminDashbord from "./admin_dashbord";




function App() {
  return (

    <BrowserRouter>
    <div className="App">

      <AdminDashbord/>
       
      <Switch>
         <Route path='/login' component={LoginSet}  />
         <Route path="/RegisterUser" component={<RegisterUserPage/>} />
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;



