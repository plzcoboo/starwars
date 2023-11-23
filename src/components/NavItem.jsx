import React, { useState } from 'react';

const NavItem = ({item,dataName,conChange}) => {
    const {thumUrl,id,isOn} = item;
    return (
        <li onClick={()=>conChange(item , dataName, id)} className={isOn ? 'on' : ''}>
            <img src={thumUrl} alt="" />
            <p>{dataName[id]}</p>
        </li>
    );
};

export default NavItem;