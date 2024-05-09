import React from 'react'
import { useState } from 'react'
import bird from './images/bird.svg'
import cat from './images/cat.svg'
import cow from './images/cow.svg'
import dog from './images/dog.svg'
import gator from './images/gator.svg'
import horse from './images/horse.svg'
import Heart from './images/heart.svg'

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse
}


const AnimalShow = ({ type, image }) => {
  const [clicks, setClicks] = useState(0)
  const handleClick = () => setClicks(clicks + 1)
  console.log(svgMap[type])

  return (
    <div onClick={handleClick}>
      <img src={svgMap[type]} alt='animal' />
      <img src={Heart}  alt='heart' style={{ width: 10 + 10 * clicks + 'px'}}/>
      {/* <h3>
        {type}
      </h3> */}
      {/* <span className='handle'>Handle is {handle}</span> */}
    </div>
  )
}

export default AnimalShow
