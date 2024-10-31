import React from 'react'

const Card = ({title,image}) => {
  return (
    <div className="Card">
        <img className='w-[500px]' src={image} alt="image" />
        <div className="description">
            <p className='text-2xl font-bold'>{title}</p>
        </div>
    </div>
  )
}

export default Card; 