import React from 'react';

//javascript: function movie() { return <...> }
//es5: var movie = function() { return <...> }

//es6 syntax
const movie = () => {
  return (
    <div id="Movie">
      <h1>Movie Title</h1>
      <p>Some description here</p>
    </div>
  );
};

export default movie;
