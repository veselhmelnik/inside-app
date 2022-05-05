import React, { useState } from 'react';
import {INFO_DATE} from '../../constants';
import avatar from './avatar.png';

import './header.scss';

export const Header = () => {
    return (
        <header className="header">
            <div className="main-info">
                <h2 className="main-info__name">Hello, Nikita DM</h2>
                <span className="main-info__date">Today is {INFO_DATE}</span>
            </div>
            <div className="user-wrapper">
                <div className="profile-info">
                    <div className="notifications">
                        <span className="las la-bell profile-btn"></span>
                        <span className="las la-sms profile-btn"></span>
                    </div>
                    <a href="#" className="btn-flip" data-back="Ofline" data-front="Online"></a> 
                </div>
                <div className="user">
                    <img src={avatar} width="40px" height="40px" alt="avatar"/>
                    <span className="las la-angle-down open-profile"></span>
                </div>
            </div>
        </header>
    )
}