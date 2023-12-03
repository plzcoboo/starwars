import React from 'react';
import styles from './NavSlider.module.scss'
import NavItem from './NavItem';

const NavSlider = ({proFileData,galleryChange,next,prev}) => {

    return (
        <ul className={styles.list}>
            {proFileData.map(item => <NavItem key={item.id} item={item} galleryChange={galleryChange}/>)}
            <button className={`xi-angle-left ${styles.prev}`} onClick={prev}></button>
            <button className={`xi-angle-right ${styles.next}`} onClick={next}></button>
        </ul>
    );
};

export default NavSlider;