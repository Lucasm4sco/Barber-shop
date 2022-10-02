import React from "react";
import './style.css';

const Header = ({darkMode, setDarkMode}) => (
    <header className={darkMode ? 'dark-mode' : 'ligth-mode'}>
        <div className="container">
            <img src="./assets/barbearia-logo.png" className="logo" alt="logo da barbearia" />
            <button className="btn-mode" onClick={() => setDarkMode(!darkMode)}>
                <img className="img-mode"
                    src={darkMode? './assets/sun.png' : './assets/moon.png'}
                    alt={darkMode? 'mudar para tema claro': 'mudar para tema escuro'}
                    />
                <span>  
                    {darkMode? 'Light' : 'Dark'}
                </span>
            </button>
        </div>
    </header>
);

export default Header;