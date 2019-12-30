import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => <div class="actor">
      {actor.name}
      Movies: {actor.movies.map(movie => `${movie}, `)}
      </div>)}
    </div>
  );
};

export default Actors;
