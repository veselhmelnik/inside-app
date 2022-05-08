import logoWhite from './logo-white.png';

import './sidebar.scss';

export const Sidebar = () => {
    return (
        <div className="sidebar"> 
            <div className="sidebar__logo">
                <a href='#'><img src={logoWhite} alt="logo"/></a>
            </div>
            <div className="sidebar__menu">
                <ul>
                    <li>
                        <a href="#"><span className="las la-desktop"></span></a>
                    </li>
                    <li>
                        <a href="#"><span className="las la-calendar"></span></a>
                    </li>
                    <li>
                        <a href="#"><span className="las la-chart-bar"></span></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}