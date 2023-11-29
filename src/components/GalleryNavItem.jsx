import React from 'react';

const GalleryNavItem = ({item}) => {
    return (
        <>
        <li><img src={item.img0} alt="" /></li>
        <li><img src={item.img1} alt="" /></li>
        <li><img src={item.img2} alt="" /></li>
        <li><img src={item.img3} alt="" /></li>
        </>
    );
};

export default GalleryNavItem;