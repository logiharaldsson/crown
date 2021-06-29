import React from 'react';

import './homePage.styles.scss';

import Directory from '../../components/directory/directory.component';

const HomePage = () => {
    return (
        <div className='homepage'>
            <Directory />
            {/* Until I make my own logo, this will have to do. */}
            <div>Logo made by 
                <a href="https://www.freepik.com" title="Freepik">Freepik</a> from 
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
        </div>
    )
}

export default HomePage;