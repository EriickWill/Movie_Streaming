import {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '@/app/AppContext'
import Card from './Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function PopularMovies() {
  const theContext = useContext(GlobalContext)
  const [popularFilms,setPopular] = useState<any>()
  const [mostrar,setMostrar] = useState(false)
  useEffect(()=>{
    setPopular(theContext.results)
    setMostrar(true)
  })

  return (
    <section className='containerAlign'>
      <h2>Just Release</h2>
      <Swiper className='flex w-full  h-96 mySwiper'  slidesPerView={5}
        spaceBetween={10}
        centeredSlides={false}
        
        navigation={true}
        modules={[Pagination,Navigation]}>
        {
          mostrar &&
          popularFilms.map((el:any)=>{
            return el.poster_path !="" ?
            <SwiperSlide key={el.id == 0 ? el.id++ : el.id }>
              <Card  img={`https://image.tmdb.org/t/p/original/${el.poster_path}`} name={el.original_title}/>
            </SwiperSlide> : null
          })
        }
      </Swiper>
      
      
    </section>
  )
}
