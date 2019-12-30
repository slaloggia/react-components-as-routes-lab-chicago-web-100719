import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => <div class="director">
      {director.name}
      {director.movies.map(movie => `${movie}, `)}
      </div>)}
    </div>
  );
}

export default Directors
