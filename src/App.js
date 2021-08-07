import React, { useState } from 'react'
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([{
    "adult": false,
    "backdrop_path": "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
    "genre_ids": [
        28,
        80,
        53
    ],
    "id": 385128,
    "original_language": "en",
    "original_title": "F9",
    "overview": "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
    "popularity": 3864.764,
    "poster_path": "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
    "release_date": "2021-05-19",
    "title": "F9",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 2146
},
{
    "adult": false,
    "backdrop_path": "/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg",
    "genre_ids": [
        16,
        35,
        12,
        10751
    ],
    "id": 459151,
    "original_language": "en",
    "original_title": "The Boss Baby: Family Business",
    "overview": "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
    "popularity": 2428.538,
    "poster_path": "/5dExO5G2iaaTxYnLIFKLWofDzyI.jpg",
    "release_date": "2021-07-01",
    "title": "The Boss Baby: Family Business",
    "video": false,
    "vote_average": 7.9,
    "vote_count": 1048
},
{
    "adult": false,
    "backdrop_path": "/tehpKMsls621GT9WUQie2Ft6LmP.jpg",
    "genre_ids": [
        12,
        53,
        28,
        27,
        37
    ],
    "id": 602223,
    "original_language": "en",
    "original_title": "The Forever Purge",
    "overview": "All the rules are broken as a sect of lawless marauders decides that the annual Purge does not stop at daybreak and instead should never end as they chase a group of immigrants who they want to punish because of their harsh historical past.",
    "popularity": 1918.558,
    "poster_path": "/uHA5COgDzcxjpYSHHulrKVl6ByL.jpg",
    "release_date": "2021-06-30",
    "title": "The Forever Purge",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 813
},
]);
  return (
    <div>
      <Container maxWidth="sm">
      <MovieList movies = {movies} />
      </Container>
    </div>
  );
}

export default App;
