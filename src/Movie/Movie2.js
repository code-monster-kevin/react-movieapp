import React from 'react';

const movie = (props) => {
    return (
        <div id="Movie">
            <h1>{props.title}</h1>
            <p>{props.category}</p>
        </div>
    );
}

export default movie;