import Card from '@/app/Components/Card/Card';
import React from 'react'

const Gallery = () => {


    let cards = [
        {
            image: "https://images.unsplash.com/photo-1680026319202-fcb822e0ab91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw0fHxkYXJrJTIwYWJzdHJhY3R8ZW58MHx8fHwxNzMwNzE3NjgyfDA&ixlib=rb-4.0.3&q=80&w=1080",
            title: "Title"
        },
        {
            image: "https://images.unsplash.com/photo-1680026319202-fcb822e0ab91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw0fHxkYXJrJTIwYWJzdHJhY3R8ZW58MHx8fHwxNzMwNzE3NjgyfDA&ixlib=rb-4.0.3&q=80&w=1080",
            title: "Title"
        },
        {
            image: "https://images.unsplash.com/photo-1680026319202-fcb822e0ab91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw0fHxkYXJrJTIwYWJzdHJhY3R8ZW58MHx8fHwxNzMwNzE3NjgyfDA&ixlib=rb-4.0.3&q=80&w=1080",
            title: "Title"
        }
    ]

  return (
    <div className='Gallery bg-gray-300 text-black grid items-center' id='gallery'>
        <h1 className='text-[5em] md:text-[200px] font-extrabold m-4'>Gallery</h1>
        <div className="gallery-container grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4 p-4">
            {cards.map((card,index) => (
                <Card key={index} title={card.title} image={card.image}/>
            ))}
        </div>
    </div>
  )
}

export default Gallery;