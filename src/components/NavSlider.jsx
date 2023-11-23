import React from 'react';
import NavItem from './NavItem';
import './NavSlider.scss'

const NavSlider = ({peoplesInfo ,data,conChange}) => {
    let dataName = [] 
    data.map (item => dataName.push(item.name))

    return (
        <ul className='list'>
            {peoplesInfo.map(item => <NavItem item = {item} key={item.id} data={data} dataName={dataName} conChange={conChange}/>)}
            <button className='xi-angle-left btn prev'></button>
            <button className='xi-angle-right btn next'></button>
        </ul>
    );
};

export default NavSlider;