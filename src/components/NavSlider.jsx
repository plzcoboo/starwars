import React from 'react';
import NavItem from './NavItem';

const NavSlider = ({peoplesInfo ,data}) => {
    let arr = []
    data.map (item => arr.push(item.name))
    return (
        <ul className='list'>
            {peoplesInfo.map(item => <NavItem item = {item} key={item.id} data={data} arr={arr}/>)}
            <button className='xi-angle-left btn prev'></button>
            <button className='xi-angle-right btn next'></button>
        </ul>
    );
};

export default NavSlider;