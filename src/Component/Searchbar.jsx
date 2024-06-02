import React from 'react'

function Searchbar({searchMovie, setSearchMovie,fetchMovieData}) {
  return (
    <div className='main flex justify-center py-5 px-4'>
   <input  type='text' placeholder='Search the movie ' value={searchMovie} onChange={(e)=> setSearchMovie(e.target.value)} className=' w-80 rounded-l-lg bg-gray-200 placeholder-gray-500 px-2 py-3 border-2  border-gray-500 text-black' />
   <button onClick={fetchMovieData} className='bg-[#40407a] px-4 text-white rounded-r-lg'> Search</button>
    </div>
  )
}

export default Searchbar