import React from 'react';
import styles from "./Header.module.scss"
import NavBar from './NavBar';

const Header = () => {
    return (
        <>
        <header className={styles.header}> 
            <h1><a href=""><img src="./images/sw_logo.jpg" alt="" /></a></h1>   
            <NavBar></NavBar>
        </header>
       
        </>
    );
};

export default Header;