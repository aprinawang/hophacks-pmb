import React, {useEffect, useState} from 'react'
import Profile from '../Profile/Profile'
import ProfileList from '../Profile/ProfileList'
import './splitmenu.css'

const SplitMenu = ({item, people, onClick, onSplit, onClose}) => {
    const [subtotals, setSubtotals] = useState(people.map((person) => ({'id': person.id, 'name': person.name, 'item': item.name, 'subtotal': 0})));
    const [splitting, setSplitting] = useState([])
    const [split, setSplit] = useState(false);
    const changeSplitters = (id) => {
        if (splitting.includes(id)) {
            setSplitting(splitting.filter((splitter) => splitter !== id))
        } else {
            setSplitting([...splitting, id])
        }
    }

    useEffect(() => {
        let subtotalsCpy = [...subtotals];
        const sub = splitting.length > 0 ? item.price / splitting.length : 0;
        setSplit(sub != 0)
        for (const id in people) {
            if (splitting.includes(Number.parseInt(id))) {
                let subtotal = {
                    ...subtotalsCpy[id],
                    'subtotal' : sub
                };
                subtotalsCpy[id] = subtotal;
            } else {
                let subtotal = {
                    ...subtotalsCpy[id],
                    'subtotal' : 0
                };
                subtotalsCpy[id] = subtotal;
            }
        }
        setSubtotals(subtotalsCpy);
    }, [splitting])

  return (
    <div className='split-menu'>
        <ProfileList key={subtotals} people={subtotals} handleClick={changeSplitters}/>
        <div className='buttons'>
            <button className='split-button' onClick={() => {onSplit(subtotals, item.price, split); onClose(split)}}>
                Split
            </button>
        </div>
    </div>
  )
}

export default SplitMenu