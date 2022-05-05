import React, { useState } from 'react';
import {INFO_DATE} from '../../constants';
import avatar from './avatar.png';

import './header.scss';

const Header = () => {
    return (
        <header>
            <div className="main-info">
                <p className="main-info__name">Hello, Nikita DM</p>
                <span className="main-info__date">Today is {INFO_DATE}</span>
            </div>
            <div className="user-wrapper">
                <div className="profile-header">
                    <span className="las la-bell profile-btn"></span>
                    <span className="las la-sms profile-btn"></span>
                    <img src={avatar} width="40px" height="40px" alt="avatar"/>
                    <span className="las la-angle-down open-profile"></span>
                </div>
                    <a href="#" className="btn-flip" data-back="Ofline" data-front="Online"></a> 
            </div>
        </header>
    )
}

export default Header;