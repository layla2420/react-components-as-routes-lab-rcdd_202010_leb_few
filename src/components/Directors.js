import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (<div>
    <h1> Directors Page </h1>

      {directors.map((name,index)=>(
<div key={index}>
<h3>Name:{directors.name}</h3>
<ul>directors.movies.map((movie,index)=>(
<li key={index}>{directors.movies}</li>
))
</ul>
</div>
      )}
    </div>
    
  );
}

export default Directors
