import React from 'react';

// Link is used for links routing in react
import { Link } from 'react-router-dom';
// Firebase authentication library, to manage users logged in.
import {auth} from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
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
        </div>
    </div>
)

export default Header;