import React from 'react';
import './MainDas.css';
import Table from '../Table/Table';
import Cards from '../Cards/Cards';
export const MainDash=()=>{
    return(
        <div className='MainDash'>
            <h1>Dashboard</h1>
            <Cards/>
            <h3>Recent Orders</h3>
            <Table/>
        </div>
    )
}