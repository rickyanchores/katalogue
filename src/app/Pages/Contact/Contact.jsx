import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gray-300 text-black h-screen grid items-center' id='contact'>
        <div className="contact-container grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
         <h1 className='text-[5em] md:text-[200px] font-extrabold'>Contact</h1>
         <div className="box p-4 grid items-center justify-center">
          <h3 className="font-bold">Social Media</h3>
          <div className="soc-links grid grid-cols-1 font-semibold p-4">
              <i>FB</i>
              <i>IG</i>
              <i>TW</i>
          </div>
         </div>
        </div>
    </div>
  )
}

export default Contact;