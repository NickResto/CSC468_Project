import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        })
      });
      
      if (response.ok) {
        setSuccess(true);
        onRegister((await response.json()).accessToken);
      } else {
        const data = await response.json();
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Failed to connect to server');
    }
  };

  if (success) {
    return (
      <Alert variant="success" style={{ fontFamily: 'Kanit, sans-serif' }}>
        Registration successful! You are now logged in.
      </Alert>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})}
          required
          style={{ fontFamily: 'Kanit, sans-serif' }}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          required
          style={{ fontFamily: 'Kanit, sans-serif' }}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          required
          style={{ fontFamily: 'Kanit, sans-serif' }}
        />
      </Form.Group>

      <Button 
        variant="success" 
        type="submit"
        style={{ fontFamily: 'Kanit, sans-serif' }}
      >
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;