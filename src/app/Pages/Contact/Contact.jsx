import Link from 'next/link';
import React from 'react'

const Contact = () => {


  let socials = [
    {
      name: "FB",
      href: ""
    },

    {
      name: "TW",
      href: ""
    },
    {
      name: "IG",
      href: ""
    }
  ]

  return (
    <div className='bg-gray-300 text-black h-screen grid items-center' id='contact'>
        <div className="contact-container grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
         <h1 className='text-[5em] md:text-[200px] font-extrabold'>Contact</h1>
         <div className="box p-4 grid items-center justify-center m-4">
          <h1 className="font-bold text-4xl">Social Media</h1>
          <div className="soc-links grid grid-cols-1 font-semibold p-4">
              {socials.map((link) => (
                <Link className='text-2xl uppercase hover:text-orange-600' href={link.href}>{link.name}</Link>
              ))}
          </div>
         </div>
        </div>
    </div>
  )
}

export default Contact;