import React from 'react';

const NavItem = ({item, arr}) => {
    const {thumUrl,id} = item;
    return (
        <li>
            <img src={thumUrl} alt="" />
            <p>{arr[id]}</p>
        </li>
    );
};

export default NavItem;