'use client'
import NavBar from '@/Components/Navbar';
import AppContext, { GlobalContext } from './AppContext';
import Hero from '@/Components/home/Hero';
import PopularMovies from '@/Components/home/PopularMovies';
import { useContext } from 'react';
export default function Home() {


  return (
    <AppContext >
        <NavBar/>
        <main className='w-full h-full'>
            <Hero/>
            <PopularMovies/>
        </main>
        asidhasiohdasd
    </AppContext>
  );
}








