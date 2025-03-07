import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search submitted:', searchTerm);
    // Handle search logic here (e.g., filter data based on searchTerm)
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="searchForm">
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
}

export default SearchBar;
