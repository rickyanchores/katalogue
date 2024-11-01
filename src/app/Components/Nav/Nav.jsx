import Link from 'next/link';
import React from 'react'

const Nav = () => {

    const navList = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Gallery",
            href: "/"
        },
        {
            name: "About",
            href: "/"
        },
        {
            name: "Contact",
            href: "/"
        }
    ]
  return (
    <nav className='Home bg-gray-300 text-black grid items-center grid-cols-2 p-4'>
        <h1 className='text-2xl font-extrabold'>KAT</h1>
        <ul className="navLinks flex gap-4">
           {navList.map((link,index) => (
            <Link key={index} className='hover:animate-pulse' href={link.href}>{link.name}</Link>
           ))}
        </ul>
    </nav>      
  )
}

export default Nav;