import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
  </div>
);

const mapStatetoProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(mapStatetoProps)(Header);
