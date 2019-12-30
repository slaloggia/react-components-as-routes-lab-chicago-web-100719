import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => <div>
        {movie.title}
        Time: {movie.time}
        Genres: {movie.genres.map(genre => `${genre}, `)}
        
        </div> )}
    </div>
  );
};

export default Movies;
