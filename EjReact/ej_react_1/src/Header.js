import React from 'react';

const Header = ({ title, text, btnText}) => (
    <header className="jumbotron hero-spacer">
        <h1>{ title }</h1>
        <p>{ text }</p>
        <p><a className="btn btn-primary btn-large">{ btnText }</a></p>
    </header>
);

export default Header;