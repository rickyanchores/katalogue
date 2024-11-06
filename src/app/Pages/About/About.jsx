import React from 'react'

const About = () => {

  return (
    <div className='bg-gray-300 text-black h-screen grid items-center grid-cols-1 md:grid-cols-2 ' id='about'>
        <h1 className='text-[5em] md:text-[200px] font-extrabold p-4'>About</h1>
        <img className='w-[600px]' src="https://images.unsplash.com/photo-1680026319202-fcb822e0ab91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw0fHxkYXJrJTIwYWJzdHJhY3R8ZW58MHx8fHwxNzMwNzE3NjgyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="imageAbout" />
    </div>
  )
}

export default About;


