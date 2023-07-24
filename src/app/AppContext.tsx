
import React,{useEffect,useState,useContext, ReactNode} from 'react'
import { IFilmes,IProps } from '@/interfaces';
import { popularMovies } from '@/Api';

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
      const data = await popularMovies();
      setData(data);
      setMostrar(true)
    }
    api_call() 
  }, []);

  return (
    <GlobalContext.Provider value={data} >{children}</GlobalContext.Provider>
  )
}
