import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      if (response.ok) {
        onLogin(data.accessToken); 
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Failed to connect to server');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          value={credentials.username}
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}
          required
          style={{ fontFamily: 'Kanit, sans-serif' }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          required
          style={{ fontFamily: 'Kanit, sans-serif' }}
        />
      </Form.Group>
      <Button 
        variant="primary" 
        type="submit" 
        style={{ fontFamily: 'Kanit, sans-serif' }}
      >
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;