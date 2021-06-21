import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Styles
import './App.css';

// Pages
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// Components
import Header from './components/header/header.component';
// FireBase
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  } // end of constructor

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* Header is placed outside of switch in order to stay on all pages */}
        {/* Header needs to be aware when a user is signed in/out */}
        <Header currentUser={this.state.currentUser}/>
        {/* Switch is used to control the routes on pages and navigation */}
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop'  component={ShopPage}/>
          <Route path='/signin'  component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  } // end of render
} // end of class App

export default App;
