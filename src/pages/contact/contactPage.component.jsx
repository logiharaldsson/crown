import React from 'react';

import './contactPage.styles.scss';

import portrait from '../../assets/portrait.jpeg';


const ContactPage = () => {
    
    return (
    <div className="contact-page">
        <div 
            className="image"
            style={{backgroundImage: `url(${portrait})`}}
        />
       

    </div>
    )
};

export default ContactPage;