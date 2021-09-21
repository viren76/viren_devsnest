import React from "react";
import '../styles/Navbar.css';
function NavBar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt=""
        />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="Buttons">
        <i className="fas fa-home"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-compass"></i>
        <i className="far fa-user-circle"></i>
      </div>
    </div>
  );
}

export default NavBar;
