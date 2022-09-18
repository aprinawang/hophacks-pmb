import React from 'react';
import Item from '../Item/Item';
import './receipt.css'

const Receipt = ({items, people, onSplit, ttt}) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

  return (
    <div className='receipt'>
        <div className='receipt-header'>
            <h4>Receipt</h4>
            <h4>Split</h4>
        </div>
        <div className='items'>
            { items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    people={people}
                    onSplit={onSplit}
                />
            ))}
        </div>
        <div className='totals'>
            <div className='receipt-tax-tip'>
                <div className='tax-tip'>
                    <p>Tax: {formatter.format(ttt.tax)}</p>
                </div>
                <div className='tax-tip'>
                    <p>Tip: {formatter.format(ttt.tip)}</p>
                </div>
            </div>
            <div className='total'>
                <div>
                    <p>Total: {formatter.format(ttt.total)}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Receipt