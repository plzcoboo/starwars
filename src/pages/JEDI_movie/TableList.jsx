import React from 'react';
import TableItem from './TableItem';
import './TableList.scss'

const TableList = ({data,onEdit,onDel}) => {
    return (
      <div className='table-box'>
        <table className='table'>
      <colgroup>
        <col width='100px'/>
        <col width='100px'/>
        <col width='100px'/>
        <col width='100px'/>
        <col width='100px'/>
        </colgroup>
        <thead>
            <tr>
                <th>Genre</th>
                <th>Title</th>
                <th>Actor</th>
                <th>Date</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
   
      {data.map( item =><TableItem key={item.id} item={item} onEdit={onEdit} onDel={onDel}/>)}
        </tbody>
    </table>
      </div>
    );
};

export default TableList;