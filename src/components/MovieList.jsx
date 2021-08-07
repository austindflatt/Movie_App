import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index)=> <div>
                <img src={`https://themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`} alt='movie'></img>
            </div>)}
        </>
    )
}

export default MovieList;