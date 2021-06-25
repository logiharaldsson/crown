import React from 'react';
import { connect } from 'react-redux'; // HOC that let's the component access redux

// Link is used for links routing in react
import { Link } from 'react-router-dom';
// Firebase authentication library, to manage users logged in.
import {auth} from '../../firebase/firebase.utils';
//  Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// SVG logo
import { ReactComponent as Logo } from '../../assets/crown.svg';
// Styles
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/shop'>Contact</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>Sign Out</div> 
                :
                <Link className='option' to='/signin'>Sign In</Link>
            }
            <CartIcon />
        </div> {/* end of option div */}
        {
            hidden ? null:
            <CartDropdown />}
    </div>
);

// This naming is standard with redux code bases, i.e. mapState...
const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
});

// HOC - wrapping around the Header, takes 2 parameters. this function and the component
export default connect(mapStateToProps)(Header);