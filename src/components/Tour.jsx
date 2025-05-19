import React, { useState } from 'react'
import '../styles/App.css'


const Tour = ({id, image, info, price, name, removeTour}) => {
  const [readMore, setReadMore] = useState(false);
  // console.log('tour',tour);
  return (
    <div className='single-tour'>
      <div className='name'>Tour Name: {name}</div>
      <div><img src={image} alt='tourImg'></img></div>      
      <div className='tour-price'>Price: {price}</div>
      {/* <div className='tour-info'>Description: {info}</div> */}
      <p className='tour-info'>
        {readMore ? info : `${info.substring(0,200)}...`}
        <button className='show' onClick={()=> setReadMore(!readMore)}>{readMore ? 'See Less': 'Show more'}</button>
      </p>
      <button  onClick={() => removeTour(id)} className='delete-btn'>Remove</button>
    </div>
  )
}

export default Tour