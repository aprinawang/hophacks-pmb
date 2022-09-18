import React from 'react'
import Profile from './Profile'

const ProfileList = ({people, handleClick}) => {
  return (
    <div className='profiles'>
        {people.map((person) => (
            <Profile
                key={person.id}
                person={person}
                handleClick={handleClick}
            />
        ))}
    </div>
  )
}

export default ProfileList