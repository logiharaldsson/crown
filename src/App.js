import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Styles
import './App.css';

// Pages
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// Components
import Header from './components/header/header.component';
// FireBase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// Redux
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }); // end of setCurrentUser
        }); // end of userRef
      } // end of if (userAuth)
      else {
        setCurrentUser(userAuth) // userAuth will be null here i.e. user is logged out
      } // end of else
    }); // end of this.unsubscribeFromAuth = auth.
  } // end of componentDidMount

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* Header is placed outside of switch in order to stay on all pages */}
        {/* Header needs to be aware when a user is signed in/out */}
        <Header />
        {/* Switch is used to control the routes on pages and navigation */}
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop'  component={ShopPage}/>
          <Route exact path='/signin'  render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}/>
        </Switch>
      </div>
    );
  } // end of render
} // end of class App

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  // dispatch(setCurrentUser(user)) is returning the object from setCurrentUser from user.action
  // Dispatch is a way to let react know that what we are passing is an .action
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
