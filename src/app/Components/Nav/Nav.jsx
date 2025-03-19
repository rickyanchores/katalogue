import Link from 'next/link';
import React from 'react'

const Nav = () => {

    const navList = [
        {
            name: "Home",
            href: "#"
        },
        {
            name: "Gallery",
            href: "#gallery"
        },
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Contact",
            href: "#contact"
        }
    ]
  return (
    <nav className='Nav fixed w-full text-black grid items-center grid-cols-2 p-4'>
        <h1 className='text-2xl font-extrabold'>KAT</h1>
        <ul className="navLinks flex font-bold gap-4 ">
           {navList.map((link,index) => (
            <Link key={index} className='hover:animate-pulse hover:text-orange-600' href={link.href}>{link.name}</Link>
           ))}
        </ul>
    </nav>      
  )
}

export default Nav;