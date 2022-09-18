import React from 'react'
import './profile.css';
import { BsFillPersonFill } from 'react-icons/bs';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const Profile = ({person, handleClick}) => {
  
  return (
    <div className='profile-box'>
      <div className='profile' onClick={() => handleClick(person.id)}>
        <BsFillPersonFill color = "#FFFFFF" size = {'2em'}/>
      </div>
      <p className='profile-name'>
        {person.name}
      </p>
      <p className='profile-total'>
        {formatter.format(person.total)}
      </p>
    </div>
  )
}

export default Profile