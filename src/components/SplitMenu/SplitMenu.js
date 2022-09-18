import React from 'react'
import Profile from '../Profile/Profile'
import './splitmenu.css'

const SplitMenu = ({people, onClick, onSubmit}) => {
  return (
    <div className='split-menu'>
        <div className='profiles'>
            {people.map((person) => (
                <Profile
                    key={person.id}
                    name={person.name}
                    total={person.total}
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