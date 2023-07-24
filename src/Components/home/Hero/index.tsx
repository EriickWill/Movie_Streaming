import { Btn,AddWatchList } from '@/Components/Buttons';
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
        <span className='bg-zinc-800 p-2 px-4 rounded-full text-xs'>Movie</span>
        <h1 className='mt-6 text-5xl font-bold'>{filmeHero.original_title}</h1>
        <p className='min-w-80 w-2/4 mt-6'>{textoFormatado}</p>
        <div className="flex gap-5 mt-6">
          <Btn text='Watch' link='' color='bg-purple-600' border=""/>
          <AddWatchList link="" color="bg-transparent"/>
        </div>
      </div>
      
    </section>
  )
}
