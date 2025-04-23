import React, { useState } from 'react';
import MovieButtons from '../MovieButtons';  // Import the consolidated MovieButtons component
import Searchbar from '../Searchbar';
import '../styles.css';

function MainTab() {
  const [movies, setMovies] = useState([]);

  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };

  return (
    <div class="wrapper">
    <div>
<h3>Quick Recommend:</h3>
      <ul style={{ listStyleType: 'none' }}>
        <p><li><MovieButtons updateMovies={updateMovies} /></li></p> 
      </ul>
<h3>Movie Search:</h3>
      <Searchbar updateMovies={updateMovies} />
      <div className="d-flex justify-content-center mt-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-item mx-2">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid"
                style={{ width: "200px", height: "300px" }}
              />
              <p>{movie.title}</p>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <img src="/Assets/Asset1.jpg" alt="Jaws movie poster" className="img-fluid mx-4 shrinked-image" />
        <img src="/Assets/Asset2.jpg" alt="Jurassic Park movie poster" className="img-fluid mx-4 shrinked-image" />
        <img src="/Assets/Asset3.jpg" alt="Star Wars movie poster" className="img-fluid mx-4 shrinked-image" />
      </div>
    </div>
    </div>
  );
}

export default MainTab;
