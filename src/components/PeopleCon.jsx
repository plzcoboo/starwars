import React, { useState } from 'react';
import './scss/Peoplecon.scss'
import GalleryNavItem from './galleryNavItem';

const PeopleCon = ({conData,height,gender,birthYear,galleryNavItem}) => {
    console.log(conData)
    return (
        <div className='contents'>
            <div className='gallery'>
            <img src={conData.imgUrl} alt="" />
            <ul className='gallery-nav'>
                {galleryNavItem.map(item =>item.id === conData.id && <GalleryNavItem item={item} key={item.id}/>)}
            </ul>
            </div>
            <div className='text-box'>
            <h2>{conData.name}</h2>
            <span>Birth-year :<em>{birthYear[conData.id]}</em></span>
            <span>height :<em>{height[conData.id]}</em></span>
            <span>gender :<em>{gender[conData.id]}</em></span>
            <p>{conData.text}</p>
            </div>           
        </div>
    );
};

export default PeopleCon;