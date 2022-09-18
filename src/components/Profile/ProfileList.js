import React from 'react'
import Profile from './Profile'

const ProfileList = ({people}) => {
  return (
    <div className='profiles'>
        {people.map((person) => (
            <Profile
                key={person.id}
                name={person.name}
                total={person.total}
            />
        ))}
    </div>
  )
}

export default ProfileList