import React from 'react';
import { connect } from 'react-redux'; // HOC that let's the component access redux
// reselect and selectors
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

// Link is used for links routing in react
import { Link } from 'react-router-dom';
// Firebase authentication library, to manage users logged in.
import {auth} from '../../firebase/firebase.utils';
//  Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// SVG logo
import { ReactComponent as Logo } from '../../assets/bird.svg';
// Styles
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className="title-name-container">
            <h1 className='title-name'>LOGAN LIVE</h1>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>Sign Out</div> 
                :
                <Link className='option' to='/signin'>Sign In</Link>
            }
            <CartIcon />
        </div> {/* end of option div */}
        {/* Ternary operator for the CartDropdown. If clicked it will unHide */}
        {
            hidden ? null:
            <CartDropdown />
        } 
    </div>
);

// This naming is standard with redux code bases, i.e. mapState...
// creatStructuredSelector knows the top level state and will send the state to the selectors stated below
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

// HOC - wrapping around the Header, takes 2 parameters. this function and the component
export default connect(mapStateToProps)(Header);