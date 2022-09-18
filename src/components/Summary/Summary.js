import React from 'react'
import './summary.css'
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const Summary = ({person, onClose}) => {
  return (
    <div className='summary-container'>
      <div className='summary'>
        <div className='summary-header'>
          <div className='summary-profile'>
            <BsFillPersonFill color = "#FFFFFF"/>
          </div>
          <p>{person.name}'s Receipt</p>
          <div>
            <AiOutlineCloseSquare size = {'1.5em'} onClick={onClose()}/>
          </div>
        </div>
        <div className='summary-items'>
          {person.items.map((item) => (<div></div>))}
        </div>
        {/* <div className='summary-name'>
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
        </div> */}
      </div>
    </div>
  )
}

export default Summary