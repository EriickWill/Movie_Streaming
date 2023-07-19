import axios from 'axios'
import React,{useEffect,useState,useContext, ReactNode} from 'react'
import { IFilmes,IProps } from '@/interfaces';

const initialData: IFilmes = {
  results: Array(20).fill({ backdrop_path: "" ,original_title:"",overview:"",release_date:"",id:0,poster_path:""
})
};
export const GlobalContext = React.createContext(initialData)


export default function AppContext({children}:IProps) {
  const [mostrar,setMostrar] = useState(false)
  const [data, setData] = useState<IFilmes>(initialData);
  
  useEffect(() => {
    async function api_call() {
      const key_api = process.env.NEXT_PUBLIC_KEY_DB;
      const response = await axios.get<IFilmes>(`https://api.themoviedb.org/3/movie/popular?api_key=${key_api}`);
      const data = response.data;
      setData(data);
      setMostrar(true)
    } 
    api_call() 
  }, []);

  return (
    <GlobalContext.Provider value={data} >{children}</GlobalContext.Provider>
  )
}
