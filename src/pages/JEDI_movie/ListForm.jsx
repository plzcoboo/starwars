import React, { useState } from 'react';
import './ListForm.scss'

const ListForm = ({Moive,onChangeInput,onSubmit,isEdit,changeSelet}) => {
    const {date,genre,actor,title} = Moive
  
    return (
        <div className='List'>
             <select name="" id="" onChange={changeSelet}>
                <option value="genre">Genre</option>
                <option value="title">Title</option>
                <option value="actor">Actor</option>
                <option value="date">Date</option>
            </select>
            <form onSubmit={onSubmit}>
            <p>
                <label htmlFor="">genre</label>
                <input type="text" onChange={onChangeInput} name='genre' value={genre}/>
            </p>
            <p>
                <label htmlFor="">title</label>
                <input type="text" onChange={onChangeInput} name='title' value={title}/>
            </p>
            <p>
                <label htmlFor="">actor</label>
                <input type="text" onChange={onChangeInput} name='actor' value={actor}/>
            </p>
            <p>
                <label htmlFor="">date</label>
                <input type="text" onChange={onChangeInput} name='date' value={date}/>
            </p>
            <p>
                <button type='submit'>{isEdit ? 'Update' : 'Create'}</button>
            </p>
            </form>
        </div>
    );
};

export default ListForm;