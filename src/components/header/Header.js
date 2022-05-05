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
                <div className="online-btns">
                    <button>
                        Online!
                    </button>
                    <button>
                        AFK!
                    </button>
                </div>
            
                <span className="las la-bell"></span>
                <span className="las la-sms"></span>
                <img src={avatar} width="40px" height="40px" alt="avatar"/>
                <span className="las la-angle-down"></span>
                
            </div>
        </header>
    )
}

export default Header;