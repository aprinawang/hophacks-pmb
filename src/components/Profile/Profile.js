import React from 'react'
import './profile.css';
import { BsFillPersonFill } from 'react-icons/bs';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const Profile = ({name, total, onClick}) => {

  return (
    <div className='profile-box'>
      <div className='profile'>
        <BsFillPersonFill color = "#FFFFFF" size = {'2em'}/>
      </div>
      <p className='profile-name'>
        {name}
      </p>
      <p className='profile-total'>
        {formatter.format(total)}
      </p>
    </div>
  )
}

export default Profile