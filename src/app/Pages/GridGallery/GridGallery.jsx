import React from 'react'

const GridGallery = () => {
  return (
    <div className='GridGallery h-screen grid items-center'>
        <div className="grid-container h-screen p-4 grid grid-cols-5 grid-rows-5 gap-4">
            <div className="bg-gray-300 hover:bg-orange-600 row-span-2 col-start-3 row-start-1">1</div>
            <div className="bg-gray-300 hover:bg-orange-600 col-span-2 row-span-2 col-start-4 row-start-1">2</div>
            <div className=" bg-gray-300 hover:bg-orange-600 col-span-2 row-span-5 col-start-1 row-start-1">3</div>
            <div className="bg-gray-300 hover:bg-orange-600 col-span-3 row-span-3 col-start-3 row-start-3">4</div>
        </div>
    </div>
  )
}

export default GridGallery;