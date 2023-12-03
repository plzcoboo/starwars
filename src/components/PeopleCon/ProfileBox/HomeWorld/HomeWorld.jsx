import React from 'react';
import styles from './HomeWorld.module.scss'


const HomeWorld = ({gallery}) => {
    const {gravity,terrain,population,name} = gallery.proData[1]
    return (
        <div className={styles.HomeWorld}>
            <img src="./images/Tatooine.jpg" alt="" />
            <h2>{name}</h2>
            <p>gravity:{gravity}</p>
            <p>terrain:{terrain}</p>
            <p>population:{population}</p>
        </div>
    );
};

export default HomeWorld;