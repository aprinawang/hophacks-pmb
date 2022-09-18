import React from 'react'
import './summary.css'
import { BsFillPersonFill } from 'react-icons/bs';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const Summary = ({person}) => {
  return (
    <div className='summary'>
      <div className='summary-name'>
        <div className='profile'>
          <BsFillPersonFill color = "#FFFFFF" size = {'1.5em'}/>
        </div>
        {person.name}
      </div>
      <div className='summary-header'>
        <h4>Items</h4>
        <h4>Price</h4>
      </div>
      <div className='summary-items'>
        <p className='summary-name'>
          {'Wings'}
        </p>
        <p className='summary-price'>
          {'7'}
        </p>
      </div>
    </div>
  )
}

export default Summary