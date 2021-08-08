import React from 'react';

const MovieList = (props) => {
    return (
        <section className='movies'>
            {props.movies.map((movie, index)=> <div>
                <article>
                <img src={`https://themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`} alt='movie'></img>
                <h3>{movie.title}</h3>
                <p>Release Date: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
                </article>
            </div>)}
            </section>
    )
}

export default MovieList;