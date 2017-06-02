import React from 'react';
import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';

const Menu = () => (
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <MenuHeader title='Start Bootstrap' />
            <MenuBody />
        </div>
    </nav>
);

export default Menu;