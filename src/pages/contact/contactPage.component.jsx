import React from 'react';

import './contactPage.styles.scss';

import portrait from '../../assets/portrait.jpeg';

const ContactPage = () => {
    
    return (
    <div className="contact-page">
        <div className='about-div'>
            <h1>About me</h1>
            <span className='f3'>
                Hey there and welcome to my e-commerce webapp. 
                You might have noticed that the webapp isn't quite ready yet. 
                Not to worry, it is an ongoing process and will eventually come alive. 
            </span>
            <br />
            <span className="f3">
                Anyways, I am a hobby developer and love interacting with 
                clever applications with elegant designs. I am curious in nature and
                once something catches my interest I start investigating and dig deeper.
            </span>
            <br />
            <span className='f3'>
                If you like this webapp, have any questions or just want chat, 
                send me a message and I will be in touch!
            </span>
            <br />
            <h3>logiharaldss@gmail.com</h3>
            <h3>+354-661-9613</h3>
        </div>
        <div className='flex-box-container'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="image-container">
                <div 
                    className="image"
                    style={{backgroundImage: `url(${portrait})`}}
                />
            </div>
            <div className='creator'>
                <span className='creator-name'>Logi Haraldsson</span>
                <br />
                <span className='creator-title'>Founder</span>
            </div>
        </div>


    </div>    

    )
};

export default ContactPage;