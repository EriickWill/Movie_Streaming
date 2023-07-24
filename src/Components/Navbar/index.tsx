import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <header className=' absolute top-0 flex justify-center items-center w-full max-w-screen h-14 z-10'>
        <nav className='containerAlign relative w-full h-full flex justify-between items-center text-zinc-50'>
            <span>Logo</span>
            <ul className='flex justify-center items-center gap-10'>
              <li>Home</li>
              <li>Discover</li>
              <li>Movie Release</li>
              <li>Forum</li>
              <li>About</li>
            </ul>

            <div className='flex justify-center items-center gap-10'>
              <Link href={""}>Sign up</Link>
              <Link href={""}>Login</Link>
            </div>
        </nav>
    </header>
  )
}
