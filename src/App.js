
import './App.css';
import {films} from './fiche'
import React,{ useState }   from 'react'
import ListMovie from './component/listMovie/ListMovie'

import Filter from './component/filter/Filter';
import AjoutMovie from './component/ajoutMovie/AjoutMovie'



function App() {
  const [movies, setMovies] = useState(films);
  const handledelete=(movId)=>{
setMovies(movies.filter(el=>el.id!==movId))
  }

  const handleAdd=(titl,dat,des,poster,rate)=>{
    const newmovie={id:Math.random(),title:titl,date:dat, posterURL:poster,rating:rate,description:des}
    setMovies([...movies,newmovie])
  }

  const filtrer =(titre,rate)=>{
    setMovies(movies.filter(el=>(el.title.toLowerCase().trim().includes(titre.toLowerCase().trim()))&&(el.rating >= rate)))
  }
  return(
  
    <div className="App">
        <Filter filtrer={filtrer}/>
      <ListMovie movies={movies} del={handledelete}/>
     
      <AjoutMovie  ajout={handleAdd}/>
    </div>
  )
}

export default App;
