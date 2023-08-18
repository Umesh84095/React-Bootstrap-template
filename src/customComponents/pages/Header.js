import React from "react";
import "./Header.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const Navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogoutClick = () => {
    Navigate("/");
  };

  const handleProfileClick = () => {
    Navigate("/profile");
  };
  return (
    <div className="navbar">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="nav-details">
        <div class="search-container">
          <form onSubmit={'/'}>
            <input
              type="text"
              placeholder="Search.."
              name="search"
              onkeyup="myFunction()"
            />
            <button type="submit">search</button>
          </form>
        </div>
        <a href="/Dashboard"><i class="fa fa-linkedin"></i></a>
        <a href="/Dashboard"><i class="fa fa-home"></i></a>
        <a href="/My-Network">My Network</a>
        <a href="/Message">Message</a>
        <a href="/Notiifcations">Notiifcations</a>
      </div>
      <div className="navbar-profile">
        <h3>
          
          <button  onClick={handleDropdownClick}><i class="fa fa-user" aria-hidden="true"></i></button>
          
          
        </h3>

        {isDropdownOpen && (
          <div className="dropdown">
            <ul>
              <button>
                <a
                  href="/"
                  onClick={handleLogoutClick}
                  style={{ color: "black" }}
                >
                  Logout
                </a>
                <a href="/Profile" onClick={handleProfileClick}>Profile</a>
              </button>
              
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// export default Header;