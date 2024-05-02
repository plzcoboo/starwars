import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'

const NavBar = () => {
    return (
        <ul className={styles.Navi}>
            <li><Link to={'/'}>People</Link></li>
            <li><Link to={'/ship'}>Ship</Link></li>
            <li><Link to={'/List'}>List</Link></li>
        </ul>
    );
};

export default NavBar;