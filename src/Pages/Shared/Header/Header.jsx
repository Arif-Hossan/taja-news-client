import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div>
           <div className='text-center'>
            <img src={logo} alt="taja_news_logo" />
            <p className='text-secondary'>Travel Without Fear and Courage</p>
            <h6 style={{color:"#3f557a"}}>{moment().format("dddd, MMMM, YYYY, h:mm a ")}</h6>
           </div>
        </div>
    );
};

export default Header;