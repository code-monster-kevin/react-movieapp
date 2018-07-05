import React from 'react';

const movie = props => {
  return (
    <div id="Movie">
      <h1>{props.title}</h1>
      <div className="box">{props.children}</div>
      <p>{props.description}</p>
    </div>
  );
};

export default movie;
