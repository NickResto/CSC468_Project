import React, { useEffect, useState } from 'react';

function TrendingMoviesTab() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //fetch("http://localhost:5001/api/movies/trending")
    fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=ff6ae1ff821d74606dbfcdfec8dd320d")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);  

  return (
    <div className="container mt-5">
      <h3 className="text-center">Trending Movies</h3>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-3 mb-4">
            <div className="card">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="card-img-top" 
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.release_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingMoviesTab;
