import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {                 // event.addEventListener(type, function)
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", handleShow());   // event.removeEventListener(type, function)
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
                alt="Profile Avatar"
            />
        </div>
    );
}

export default Nav;
