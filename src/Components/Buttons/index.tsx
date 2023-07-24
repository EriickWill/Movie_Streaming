import Link from 'next/link'
import React from 'react'


interface IPropsBtn{
  text:string, 
  link:string, 
  color:string,
  border:string
}
export function Btn({text,link,color,border}:IPropsBtn) {
  const classNameBtn = `${color} ${border} w-48 h-12  font-semibold flex items-center justify-center rounded-xl` 
  return (
    <Link href={link} className={classNameBtn}>{text}</Link>
  )
}

export function AddWatchList({link,color}:any) {
  const classNameBtn = `${color} border-2 w-48 h-12  font-semibold flex items-center justify-center rounded-xl` 
  return (
    <Link href={link} className={classNameBtn}>Add Watchlist</Link>
  )
}