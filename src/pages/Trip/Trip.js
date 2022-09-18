import React, { useState } from 'react';
import Profile from '../../components/Profile/Profile';
import Receipt from '../../components/Receipt/Receipt';
import './trip.css';
import { BsCameraFill } from 'react-icons/bs';

const item_arr = [
    {'id': 0, 'name': 'Wings', 'price': 14},
    {'id': 1, 'name': 'Steak Sandwich', 'price': 16},
    {'id': 2, 'name': 'Steak Sandwich', 'price': 16},
    {'id': 3, 'name': 'Mac and Cheese', 'price': 8},
    {'id': 4, 'name': 'BBQ Burger', 'price': 15},
]

const people = [
    {'name': 'Renee', 'total': 0, 'items': []},
    {'name': 'Amy', 'total': 0, 'items': []},
    {'name': 'Aprina', 'total': 0, 'items': []},
    {'name': 'Christine', 'total': 0, 'items': []},
]

const Trip = () => {
    const [items, setItems] = useState(item_arr);
    const [people, setPeople] = useState(item_arr);
    let tax = 0;
    let tax_rate;
    let tip = 0;

    const today = new Date(Date.now());

  return (
    <div className='trip'>
        <div className='header'>
            <h1 className='trip-title'>{today.toLocaleDateString()} Trip</h1>
            <span className='camera-icon'>
                <BsCameraFill color="#FFFFFF" size = {'2.5em'}/>
            </span>
        </div>
        <div>
            <Profile></Profile>
        </div>
        <Receipt items={items}></Receipt>
    </div>
  )
}

export default Trip