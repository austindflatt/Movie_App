import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index)=> <div>
                <img src={`https://themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`} alt='movie'></img>
                <h1>{movie.title}</h1>
                <h1>Release Date: {movie.release_date}</h1>
                <h1>Rating: {movie.vote_average}</h1>
            </div>)}
        </>
    )
}

export default MovieList;