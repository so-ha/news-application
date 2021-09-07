import React from 'react';
import Weather from '../Weather/Weather';
import TrendingSearch from './TrendingSearch';
import '../../css/sidebar.css';

function Sidebar(props) {
    return (
        <div className="side-bar">
            <Weather/>
            <TrendingSearch/>
        </div>
    );
}

export default Sidebar;