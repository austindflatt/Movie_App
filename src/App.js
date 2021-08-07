import React, { useState, useEffect } from 'react'
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=d8e8a6fc7a59b84ca2fc3354fcb4a913&language=en-US"

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.results)
  };

  useEffect(()=>{
    getMovieRequest();
  }, []);

  return (
    <div>
      <Container maxWidth="sm">
      <MovieList movies = {movies} />
      </Container>
    </div>
  );
}

export default App;
