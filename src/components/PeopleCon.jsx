import React, { useState } from 'react';
import './Peoplecon.scss'

const PeopleCon = ({conData,height,gender,birthYear}) => {
    return (
        <div className='contents'>
            <img src={conData.imgUrl} alt="" />
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