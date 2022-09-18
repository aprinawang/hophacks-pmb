import React, {useState} from 'react'
import Profile from '../Profile/Profile'
import './splitmenu.css'

const SplitMenu = ({people, onClick, onSubmit}) => {
    const [splitting, setSplitting] = useState([])
    const handleClick = (id) => {
        console.log(id);
        // if (splitting.includes(id)) {

        // }
    }
  return (
    <div className='split-menu'>
        <div className='profiles'>
            {people.map((person) => (
                <Profile
                    key={person.id}
                    name={person.name}
                    total={person.total}
                    handleClick={handleClick}
                />
            ))}
        </div>
        <div className='buttons'>
            <button className='split-button' onClick={() => onSubmit(console.log('submit'))}>
                Split
            </button>
        </div>
    </div>
  )
}

export default SplitMenu