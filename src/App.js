import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBar from './components/SearchBar';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=d8e8a6fc7a59b84ca2fc3354fcb4a913&language=en-US"

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.results)
  };

  useEffect(()=>{
    getMovieRequest();
  }, [searchValue]);

  return (
    <div>
      <MovieListHeading heading='Movies' />
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movies = {movies} />
    </div>
  );
}

export default App;
