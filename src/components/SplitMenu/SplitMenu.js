import React, {useEffect, useState} from 'react'
import Profile from '../Profile/Profile'
import ProfileList from '../Profile/ProfileList'
import './splitmenu.css'

const SplitMenu = ({total, people, onClick, onSubmit}) => {
    const [subtotals, setSubtotals] = useState(people.map((person) => ({'id': person.id, 'name': person.name, 'total': 0})));
    const [splitting, setSplitting] = useState([])
    const changeSplitters = (id) => {
        if (splitting.includes(id)) {
            setSplitting(splitting.filter((splitter) => splitter !== id))
        } else {
            setSplitting([...splitting, id])
        }
    }

    useEffect(() => {
        let subtotalsCpy = [...subtotals];
        const sub = splitting.length > 0 ? total / splitting.length : 0;
        for (const id in people) {
            if (splitting.includes(Number.parseInt(id))) {
                let subtotal = {
                    ...subtotalsCpy[id],
                    'total' : sub
                };
                subtotalsCpy[id] = subtotal;
                setSubtotals(subtotalsCpy);
            } else {
                let subtotal = {
                    ...subtotalsCpy[id],
                    'total' : 0
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
            <button className='split-button' onClick={() => onSubmit(console.log('submit'))}>
                Split
            </button>
        </div>
    </div>
  )
}

export default SplitMenu