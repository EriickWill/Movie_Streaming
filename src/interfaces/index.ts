import { ReactNode } from 'react'

export interface IProps{
  children:ReactNode
}
export interface IFilmes{
  results: {
    backdrop_path:string,
    original_title:string,
    overview:string,
    release_date:string,
    id:number,
    poster_path:string,
    
  }[],
}
export interface IFilme{
  filmes:IFilmes[]
}