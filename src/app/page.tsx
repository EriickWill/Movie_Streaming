'use client'
import NavBar from '@/Components/Navbar';
import AppContext from './AppContext';
import Hero from '@/Components/home/Hero';
import PopularMovies from '@/Components/home/PopularMovies';
import TopReted from '@/Components/home/TopRated';
export default function Home() {


  return (
    <AppContext >
        <NavBar/>
        <main className='w-full h-full'>
            <Hero/>
            <PopularMovies/>
            <TopReted/>
        </main>
    </AppContext>
  );
}








