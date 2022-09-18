import React, { useEffect, useState } from 'react'
import './item.css';
import { IoIosArrowDropdown } from 'react-icons/io';
import SplitMenu from '../SplitMenu/SplitMenu';

const Item = ({name, price, people}) => {
  const [expanded, setExpanded] = useState(false);
  const [split, setSplit] = useState(false);
  const [color, setColor] = useState('##FFFFF6');
  const [height, setHeight] = useState('5vh');

  useEffect(
    () => { if (split) { setColor('#e4e4d8'); } }, 
  [split])

  useEffect(
    () => { 
      if (expanded){
        setHeight('25vh')
      } else {
        setHeight('5vh');
      }
    },
  [expanded])

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return (
    <div className='item' style={{'backgroundColor': color, 'height': height}}>
      <div className='item-header'>
        <p className='item-name'>
          {name}
        </p>
        <p className='item-price'>
          {formatter.format(price)}
        </p>
        <span className='item-dropdown' onClick={() => setExpanded(!expanded)}>
          <IoIosArrowDropdown color='#a6a6a6'/>
        </span>
      </div>
      {expanded && <SplitMenu people={people}></SplitMenu>}
    </div>
  )
}

export default Item