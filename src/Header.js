import React from "react";
import "./Header.css";
import Logo from "./Images/logo.png";
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="Logo" />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon
        className="header__searchIcon"
        />
      </div>
      <div className="header__nav">
          <div className="header__option">
              <span className="option__LineOne">
                  Hello Guest
              </span>
              <span className="option__LineTwo">
                  Sign In
              </span>
          </div>
          <div className="header__option">
          <span className="option__LineOne">
                  Returns
              </span>
              <span className="option__LineTwo">
                  Orders
              </span>
          </div>
          <div className="header__option">
          <span className="option__LineOne">
                  Your
              </span>
              <span className="option__LineTwo">
                  Prime
              </span>
          </div>
      </div>
    </div>
  );
}

export default Header;
