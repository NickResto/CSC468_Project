import React, { useState } from 'react';
import Buttons1 from '../Buttons1';
import Buttons2 from '../Buttons2';
import Buttons3 from '../Buttons3';
import Buttons4 from '../Buttons4';
import Buttons5 from '../Buttons5';
import Searchbar from '../Searchbar';
import '../styles.css'; 

function MainTab() {
  const [movies, setMovies] = useState([]);

  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };

  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        <p><li><Buttons1 /></li></p>
        <p><li><Buttons3 /></li></p>
        <p><li><Buttons2 /></li></p>
        <p><li><Buttons4 /></li></p>
        <p><li><Buttons5 /></li></p>
      </ul>

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
          <p>No recommendations yet.</p>
        )}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <img src="/Assets/Asset1.jpg" alt="Jaws movie poster" className="img-fluid mx-4 shrinked-image" />
        <img src="/Assets/Asset2.jpg" alt="Jurassic Park movie poster" className="img-fluid mx-4 shrinked-image" />
        <img src="/Assets/Asset3.jpg" alt="Star Wars movie poster" className="img-fluid mx-4 shrinked-image" />
      </div>
    </div>
  );
}

export default MainTab;
