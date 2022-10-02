import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Content from "../Components/Content";
import './style.css';

const LandingPage = () => {
    let [ darkMode, setDarkMode ] = useState(false);

    return (
        <div className="landingPage">
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <main>
                <Banner />
                <Content darkMode={darkMode}/>
            </main>
        </div>
    );
};

export default LandingPage