import React from 'react';
import MovieCard from '../movieCard/MovieCard';

const ListMovie = ({movies,del}) => {
  return (
    <div className='listmovie'>
      {movies.map(movie=><MovieCard  key={movies.id}   movie={movie} del={del} />)}
    </div>
  );
}

export default ListMovie;
