import React from 'react';

const MovieForm = () => {
    return (
        <form>
            <span>Movie Title: <input id="txtMovieTitle" type="text"></input></span>
            <span>Movie Description: <input id="txtMovieDesc" type="text"></input></span>
            <button type="submit">Submit</button>
        </form>
    );
}