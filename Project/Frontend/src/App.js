import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Container, Row, Col } from 'react-bootstrap';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import MainTab from './components/Tabs/MainTab';  
import PopularMoviesTab from './components/Tabs/PopularMoviesTab';
import TrendingMoviesTab from './components/Tabs/TrendingMoviesTab';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleAuthSuccess = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <div className="App" style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff' }}>
      <Container>
        <Row className="justify-content-between align-items-center py-3">
          <Col>
            <h1 style={{ fontFamily: 'Kanit, sans-serif' }}>Reel Picks</h1>
          </Col>
          <Col md="auto">
            {isAuthenticated ? (
              <button 
                onClick={handleLogout}
                className="btn btn-danger"
                style={{ fontFamily: 'Kanit, sans-serif' }}
              >
                Logout
              </button>
            ) : (
              <div className="auth-section" style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
                {!showRegister ? (
                  <>
                    <LoginForm onLogin={handleAuthSuccess} />
                    <button 
                      onClick={() => setShowRegister(true)}
                      className="btn btn-link"
                      style={{ color: '#fff', fontFamily: 'Kanit, sans-serif' }}
                    >
                      Don't have an account? Register
                    </button>
                  </>
                ) : (
                  <>
                    <RegisterForm onRegister={handleAuthSuccess} />
                    <button 
                      onClick={() => setShowRegister(false)}
                      className="btn btn-link"
                      style={{ color: '#fff', fontFamily: 'Kanit, sans-serif' }}
                    >
                      Already have an account? Login
                    </button>
                  </>
                )}
              </div>
            )}
          </Col>
        </Row>


        <Tab.Container id="movie-tabs" defaultActiveKey="main">
          <Tab.Content>
            <Tab.Pane eventKey="main">
              <MainTab />
            </Tab.Pane>
            <Tab.Pane eventKey="popular">
              <PopularMoviesTab />
            </Tab.Pane>
            <Tab.Pane eventKey="trending">
              <TrendingMoviesTab />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default App;