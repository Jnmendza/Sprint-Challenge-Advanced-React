import React from 'react';
import useDarkMode from "../hooks/useDarkMode";




const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false)
    const toggleMode = e => {
        e.preventDefault();
        console.log('value', darkMode)
        setDarkMode(!darkMode)
    };

    return (
        <nav className="navbar">
            <h1>Top Female Footballers</h1>
            <button
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
            >Switch It Up</button>
        </nav>
    )
}

export default Navbar;