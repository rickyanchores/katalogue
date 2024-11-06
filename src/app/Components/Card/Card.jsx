import React from 'react'

const Card = ({title,image}) => {
  return (
    <div className="Card">
        <img className='w-[500px]' src={image} alt="image" />
        <div className="description">
            <h2 className='text-2xl font-bold'>{title}</h2>
        </div>
    </div>
  )
}

export default Card; 