import React from 'react';
import useDarkMode from "../hooks/useDarkMode";
import styled from "styled-components"

const NavBar = styled.div`
    display: flex;
    height: 50px;
    justify-content: flex-end;
`;

const Btn = styled.button`
    height: 75%;
    margin: auto 10px;
    padding: 10px;
`;

const Title = styled.h1`
    margin: 0 25% 0 10%;
    color: #fffff2;

    
`;

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false)
    const toggleMode = e => {
        e.preventDefault();
        console.log('value', darkMode)
        setDarkMode(!darkMode)
    };

    return (
        <NavBar className="navbar">
            <Title>Top Female Footballers</Title>
            <Btn
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
            >Switch It Up</Btn>
        </NavBar>
    )
}

export default Navbar;