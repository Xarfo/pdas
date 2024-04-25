import React from 'react'

const ProfileCard = ({ title, handle, image }) => {
  return (
    <div className="bg-slate-400 rounded-xl p-8 border-solid border-stone-300">
      <img src={image} alt='logo' />   
      <h3>
        title is {title}
      </h3>
      <span className='handle'>Handle is {handle}</span>
    </div>
  )
}

export default ProfileCard
