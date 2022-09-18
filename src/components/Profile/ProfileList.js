import React from 'react'
import Profile from './Profile'

const ProfileList = ({people, handleClick, subtotal}) => {
  return (
    <div className='profiles'>
        {people.map((person) => (
            <Profile
                key={person.id}
                person={person}
                handleClick={handleClick}
                subtotal={subtotal}
            />
        ))}
    </div>
  )
}

export default ProfileList