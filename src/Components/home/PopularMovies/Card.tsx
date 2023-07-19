import Image from 'next/image'
import React from 'react'
interface IProps{
  img:string,
  name:string
}
import { SwiperSlide } from 'swiper/react';
export default function Card({img,name}:IProps) {
  return (
    <div className='relative w-64 h-96'>
      <img className='w-full h-full absolute object-cover' src={img} alt={`imagem do filme ${name}`}/>
    </div>
  )
}
