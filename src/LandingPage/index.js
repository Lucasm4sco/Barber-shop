import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Content from "../Components/Content";
import './style.css';

const LandingPage = () => {
    let [ darkMode, setDarkMode ] = useState(false);

    return (
        <div className={ (darkMode ? 'dark-mode' : 'ligth-mode') + ' landingPage' }>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <main>
                <Banner />
                <Content />
            </main>
        </div>
    );
};

export default LandingPage