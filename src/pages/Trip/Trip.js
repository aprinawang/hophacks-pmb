import React, { useState } from 'react';
import Receipt from '../../components/Receipt/Receipt';
import './trip.css';
import { BsCameraFill } from 'react-icons/bs';
import ProfileList from '../../components/Profile/ProfileList';
import Summary from '../../components/Summary/Summary';

const item_arr = [
    {'id': 0, 'name': 'Wings', 'price': 14},
    {'id': 1, 'name': 'Steak Sandwich', 'price': 16},
    {'id': 2, 'name': 'Steak Sandwich', 'price': 16},
    {'id': 3, 'name': 'Mac and Cheese', 'price': 8},
    {'id': 4, 'name': 'BBQ Burger', 'price': 15},
]

const people_arr = [
    {'id': 0, 'name': 'Renee', 'total': 4, 'items': []},
    {'id': 1, 'name': 'Amy', 'total': 4, 'items': []},
    {'id': 2, 'name': 'Aprina', 'total': 4, 'items': []},
    {'id': 3, 'name': 'Christine', 'total': 4, 'items': []},
]

const Trip = () => {
    const [items, setItems] = useState(item_arr);
    const [people, setPeople] = useState(people_arr);
    let tax = 0;
    let tax_rate;
    let tip = 0;

    const today = new Date(Date.now());

    const handleSplit = (subtotals) => {
        // update people
    }

  return (
    <div className='trip'>
        <div className='header'>
            <h1 className='trip-title'>{today.toLocaleDateString()} Trip</h1>
            <span className='camera-icon'>
                <BsCameraFill color="#FFFFFF" size = {'2.5em'}/>
            </span>
        </div>
        <ProfileList people={people}></ProfileList>
        <Receipt items={items} people={people} onSplit={handleSplit}></Receipt>
    </div>
  )
}

export default Trip