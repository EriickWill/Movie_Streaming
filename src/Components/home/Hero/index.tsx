import { DiminuirTexto } from '@/Util/functions';
import { GlobalContext } from '@/app/AppContext'
import Link from 'next/link';
import React, { useContext } from 'react'




export default function Hero() {
  const theContext = useContext(GlobalContext)
  const filmeHero =  theContext.results[8];
  const Imagelink = `https://image.tmdb.org/t/p/original/${filmeHero.backdrop_path}`

  const textoFormatado = DiminuirTexto(filmeHero.overview)
  return (

    <section className='w-full max-w-screen min-h-screen h-full 'style={{background:`linear-gradient(rgb(13, 12, 15,0.5),rgb(13, 12, 15,1)),url(${Imagelink})center center/cover`}}>
      <div className=' min-h-screen z-10 text-zinc-50 flex flex-col justify-center  items-start containerAlign'>
        <span>Movie</span>
        <h1 className='mt-6 text-5xl'>{filmeHero.original_title}</h1>
        <p className='min-w-80 w-2/4 mt-6'>{textoFormatado}</p>
        <div className="flex gap-5 mt-6">
          <Link href="" className='bg-purple-600 w-48 h-12 font-semibold flex items-center justify-center rounded-xl'>Watch</Link>
          <Link href="" className='bg-transparent border-2 w-48 h-12  font-semibold flex items-center justify-center rounded-xl'>Add Watchlist</Link>
        </div>
      </div>
      
    </section>
  )
}
