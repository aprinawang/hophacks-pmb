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
    {'id': 0, 'name': 'Renee', 'subtotal': 0, 'items': []},
    {'id': 1, 'name': 'Amy', 'subtotal': 0, 'items': []},
    {'id': 2, 'name': 'Aprina', 'subtotal': 0, 'items': []},
    {'id': 3, 'name': 'Christine', 'subtotal': 0, 'items': []},
]

const tax_val = 4.14
const tip_val = 14
const tax_rate_val = 0.06;
const subtotal_val = 69;

const Trip = () => {
    const [items, setItems] = useState(item_arr);
    const [people, setPeople] = useState(people_arr);
    const [totalSplit, setTotalSplit] = useState(0);
    const tax = tax_val;
    const tip = tip_val;
    const tax_rate = tax_rate_val;
    const tip_rate = tip_val / (subtotal_val + tax_val);
    const total = subtotal_val + tax + tip;

    const today = new Date(Date.now());

    const handleSplit = (subtotals, itemcost, split) => {
        // update people
        const totSplit = totalSplit + itemcost;
        if (split) {
            let peopleCpy = [...people];
            for (const id in people) {
                if(subtotals[id].subtotal != 0) {
                    // update person total and items list
                    let person = {
                        ... peopleCpy[id],
                        'subtotal' : peopleCpy[id].subtotal + subtotals[id].subtotal,
                        'items' : peopleCpy[id].items ? [...peopleCpy[id].items, subtotals[id].items] : [subtotals[id].item]
                    }
                    peopleCpy[id] = person;
                }
            }
            setTotalSplit(totSplit);
            setPeople(peopleCpy);
        }
    }

  return (
    <div className='trip'>
        <div className='header'>
            <h1 className='trip-title'>{today.toLocaleDateString()} Trip</h1>
            <span className='camera-icon'>
                <BsCameraFill color="#FFFFFF" size = {'2.5em'}/>
            </span>
        </div>

        <ProfileList key={people} people={people}></ProfileList>
        <Receipt items={items} people={people} onSplit={handleSplit} ttt = {{'tax':tax, 'tip':tip, 'total':total}}></Receipt>
    </div>
  )
}

export default Trip