import React from "react";
import './style.css';

const Content = ({darkMode}) => (
    <section className={darkMode ? 'dark-mode' : 'light-mode'}>
        <div className="container">
            <h1>Bem-vindo a Barber Shop</h1>
        </div>
    </section>
);

export default Content;