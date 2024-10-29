import Card from '@/app/Components/Card/Card';
import React from 'react'

const Gallery = () => {


    let cards = [
        {
            image: "https://images.unsplash.com/photo-1452878569550-39e3d2e630ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw1fHx3cmlzdCUyMHdhdGNofGVufDB8fHx8MTczMDIwNjc1M3ww&ixlib=rb-4.0.3&q=80&w=1080",
            title: "Title"
        },
        {
            image: "https://images.unsplash.com/photo-1452878569550-39e3d2e630ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw1fHx3cmlzdCUyMHdhdGNofGVufDB8fHx8MTczMDIwNjc1M3ww&ixlib=rb-4.0.3&q=80&w=1080",
            title: "Title"
        },
        {
            image: "https://images.unsplash.com/photo-1452878569550-39e3d2e630ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw1fHx3cmlzdCUyMHdhdGNofGVufDB8fHx8MTczMDIwNjc1M3ww&ixlib=rb-4.0.3&q=80&w=1080",
            title: "Title"
        }
    ]

  return (
    <div className='Gallery bg-gray-300 text-black grid items-center'>
        <h1 className='text-[200px] font-extrabold'>Gallery</h1>
        <div className="gallery-container grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4 p-4">
            {cards.map((card,index) => (
                <Card key={index} title={card.title} image={card.image}/>
            ))}
        </div>
    </div>
  )
}

export default Gallery;