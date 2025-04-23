import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = 'ff6ae1ff821d74606dbfcdfec8dd320d'; 
const API_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieButtons() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [length, setLength] = useState('');
  const [filtersSelected, setFiltersSelected] = useState(false); // Track if any filter is selected

  useEffect(() => {
    if (!filtersSelected) return; // Don't fetch movies if no filters are selected

    const fetchMovies = async () => {
      let url = `${API_URL}/discover/movie?api_key=${API_KEY}`;

      if (genre) {
        url += `&with_genres=${genre}`;
      }
      if (rating) {
        url += `&vote_average.gte=${rating === 'Rated well' ? 7 : 0}`;
      }

      try {
        const response = await axios.get(url);
        let movieIds = response.data.results.map(movie => movie.id);

        // Now, fetch full details (including runtime) for each movie
        const movieDetailsPromises = movieIds.map(async (movieId) => {
          const detailsUrl = `${API_URL}/movie/${movieId}?api_key=${API_KEY}`;
          const movieDetails = await axios.get(detailsUrl);
          return movieDetails.data;
        });

        // Wait for all the movie details to be fetched
        const fullMovies = await Promise.all(movieDetailsPromises);

        // Filter movies based on runtime if length is selected
        let filteredMovies = fullMovies;
        if (length) {
          filteredMovies = fullMovies.filter(movie => {
            const runtime = movie.runtime;
            if (length === 'Short') {
              return runtime && runtime < 90;
            } else if (length === 'Long') {
              return runtime && runtime >= 90;
            }
            return true;
          });
        }

        setMovies(filteredMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [genre, rating, length, filtersSelected]);

  const handleButtonClick = (type, value) => {
    if (type === 'genre') {
      setGenre(value);
    } else if (type === 'rating') {
      setRating(value);
    } else if (type === 'length') {
      setLength(value);
    }
    setFiltersSelected(true); // Set filters as selected after any button click
  };

  return (
    <div>
      <ul style={{ listStyleType: 'none' }}> {/* Remove bullets from the list */}
        <li>
          <ButtonGroup>
            <Button variant={genre === '28' ? "primary active" : "primary"} onClick={() => handleButtonClick('genre', '28')}>Action</Button>
            <Button variant={genre === '35' ? "primary active" : "primary"} onClick={() => handleButtonClick('genre', '35')}>Comedy</Button>
            <Button variant={genre === '18' ? "primary active" : "primary"} onClick={() => handleButtonClick('genre', '18')}>Drama</Button>
            <Button variant={genre === '27' ? "primary active" : "primary"} onClick={() => handleButtonClick('genre', '27')}>Horror</Button>
          </ButtonGroup>
        </li>

        <li>
          <ButtonGroup>
            <Button variant={rating === 'Rated well' ? "primary active" : "primary"} onClick={() => handleButtonClick('rating', 'Rated well')}>Rated well</Button>
            <Button variant={rating === 'Rated poor' ? "primary active" : "primary"} onClick={() => handleButtonClick('rating', 'Rated poor')}>Rated poor</Button>
          </ButtonGroup>
        </li>

        <li>
          <ButtonGroup>
            <Button variant={length === 'Short' ? "primary active" : "primary"} onClick={() => handleButtonClick('length', 'Short')}>Short</Button>
            <Button variant={length === 'Long' ? "primary active" : "primary"} onClick={() => handleButtonClick('length', 'Long')}>Long</Button>
          </ButtonGroup>
        </li>
      </ul>

      {/* Render movie recommendations only after filters are selected */}
      {filtersSelected && (
        <div>
          <h3>Movie Recommendations:</h3>
          {movies.length === 0 ? (
            <p>No movies found based on the selected criteria.</p>
          ) : (
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {movies.map(movie => (
                <li key={movie.id} style={{ width: '200px', listStyleType: 'none' }}>
                  {movie.poster_path ? (
                    <img
                      src={`${IMAGE_URL}${movie.poster_path}`}
                      alt={movie.title}
                      style={{ width: '100%', borderRadius: '8px' }}
                    />
                  ) : (
                    <div style={{ width: '100%', height: '300px', backgroundColor: '#ccc', borderRadius: '8px' }}></div>
                  )}
                  <h5>{movie.title}</h5>
                  <p className="paragraph">{movie.overview}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieButtons;
