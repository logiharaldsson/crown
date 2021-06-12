import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Styles
import './App.css';

// Pages
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shop/shop.component';
// Components
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      {/* Header is placed outside of switch in order to stay on all pages */}
      <Header />
      {/* Switch is used to control the routes on pages and navigation */}
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop'  component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
