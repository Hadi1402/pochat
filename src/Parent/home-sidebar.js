import React from "react";
import "../static/css/right-menu.css";



function checked(){
    
  var checkBox = document.getElementById('.label-check');
  var menu = document.getElementsByClassName('.menu');
  
  if (checkBox.checked == true){
      menu.style.width="100px"
  } else {
      menu.style.width="50px"
  }
}



function homeSideBar(){
  return(
    <div className="menu">
        <div class="menu-btn">
            <input class="label-check" id="label-check" type="checkbox"/>
            <label for="label-check" class="hamburger-label">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <label></label></label>
        </div>
        <div></div>
    </div>
  )
}

export default homeSideBar;