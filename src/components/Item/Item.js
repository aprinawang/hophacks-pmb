import React from 'react'
import './item.css';
import { IoIosArrowDropdown } from 'react-icons/io';

const Item = ({name, price}) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });


  return (
    <div className='item'>
      <p className='item-name'>
        {name}
      </p>
      <p className='item-price'>
        {formatter.format(price)}
      </p>
      <span className='item-dropdown' onClick={() => console.log('dropdown')}>
        <IoIosArrowDropdown color='#a6a6a6'/>
      </span>
    </div>
  )
}

export default Item