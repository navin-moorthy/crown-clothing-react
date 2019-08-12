import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";

import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth = null;
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
