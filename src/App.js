import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import Searchbar from './Component/Searchbar';
import MovieCard from './Component/MovieCard';

function App() {
    const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const fetchMovieData = async () => {
        try {
          setLoading(true);
          const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=bf7e1685`);
          const data = await res.json();
          
          setAllMovieData(data.Search);
          setLoading(false)
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
      }
  return (
    <div>
      
      <Navbar/>
      <div className='bg'>
      <Searchbar  searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
      <MovieCard allMovieData={allMovieData} loading={loading}/>

      </div>
    </div>
  )
}

export default App