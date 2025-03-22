import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ff6ae1ff821d74606dbfcdfec8dd320d&query=${searchTerm}`);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }

    setLoading(false);
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="searchForm">
          <Form.Control
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Search
        </Button>
      </Form>

      {loading && <p>Loading...</p>}

      <div className="movie-list mt-4">
        {movies.length > 0 && !loading ? (
          <div className="d-flex flex-wrap">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-item mx-2">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="img-fluid"
                  style={{ width: "200px", height: "300px" }}
                />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        ) : (
          !loading && <p></p>
        )}
      </div>
    </Container>
  );
}

export default SearchBar;
