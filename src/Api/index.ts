import axios from 'axios'
import { IFilmes } from '@/interfaces';


const key_api = process.env.NEXT_PUBLIC_KEY_DB;
const base_url = "https://api.themoviedb.org/3"
export async function popularMovies() {
  const response = await axios.get<IFilmes>(`${base_url}/movie/popular?api_key=${key_api}`);
  const data = await response.data;
  return data
}
export async function topRated() {
  const response = await axios.get<IFilmes>(`${base_url}/movie/top_rated?api_key=${key_api}`);
  const data = await response.data;
  return data
}
export async function search(filme:any){
  const response = await axios.get<IFilmes>(`${base_url}/search/movie?api_key=${key_api}&${filme}`);
  const data = await response.data;
  return data
}