import React from "react";
import "../static/css/right-menu.css";

function homeSideBar() {
  const checked = () => {
    const checkBox = document.getElementById('label-check');
    const menu = document.getElementsByClassName('menu')[0];

    if (checkBox.checked) {
      menu.style.width = "170px";
    } else {
      menu.style.width = "50px";
    }
  };

  return (
    <div className="menu">
      <div className="menu-btn">
        <input className="label-check" id="label-check" type="checkbox" onChange={checked} />
        <label htmlFor="label-check" className="hamburger-label">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </label>
      </div>
      <div id="menu_items"></div>
    </div>
  );
}

export default homeSideBar;