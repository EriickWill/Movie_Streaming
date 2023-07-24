import React from 'react'

interface IProps{
  img:string,
  name:string
}

export default function Card({img,name}:IProps) {
  return (
    <div className='relative w-64 h-96 rounded-full'>
      <img className=' w-full h-full absolute object-cover z-0' src={img} alt={`imagem do filme ${name}`}/>    
    </div>
  )
}
