import React from 'react'

const Card = ({title,image}) => {
  return (
    <div className="Card">
        <img src={image} alt="image" />
        <div className="description">
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Card; 