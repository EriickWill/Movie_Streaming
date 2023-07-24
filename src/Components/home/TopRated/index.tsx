import {topRated } from '@/Api'
import Card from '@/Components/Card'
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function TopReted() {

  const [topReted,setTopReted] = useState<any>()
  const [mostrar,setMostrar] = useState(false)
  useEffect(()=>{
      async function api_call() {
        const data = await topRated()
        console.log(data)
        console.log(data.results)
        setTopReted(data.results)
        setMostrar(true)
      }
      api_call()
  },[])

  return (
    <section className='containerAlign'>
      <h2 className='mt-6 text-2xl my-6 font-semibold text-zinc-100'>Just Release</h2>
      {mostrar &&
      
        <Swiper className='flex w-full  h-96 mySwiper'  slidesPerView={5}
          spaceBetween={10}
          centeredSlides={false}
          
          navigation={true}
          modules={[Pagination,Navigation]}>
          {
            mostrar &&

            topReted.map((el:any)=>{
              return el.poster_path !="" ?
              <SwiperSlide key={el.id == 0 ? el.id++ : el.id }>
                <Card  img={`https://image.tmdb.org/t/p/original/${el.poster_path}`} name={el.original_title}/>
              </SwiperSlide> : null
            })
          }
        </Swiper>
      }
      
      
      
    </section>
  )
}
