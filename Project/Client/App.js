import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import PopularMoviesTab from './components/Tabs/PopularMoviesTab';
import TrendingMoviesTab from './components/Tabs/TrendingMoviesTab';
import MainTab from './components/Tabs/MainTab'; // Import the MainTab component
import { Nav, Tab } from 'react-bootstrap'; // Import Bootstrap Tab components

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center align-items-center">
        <h1>Reel Picks</h1>
      </div>

      <Tab.Container id="movie-tabs" defaultActiveKey="main">
        <Nav variant="tabs" className="justify-content-start mb-4"> 
          <Nav.Item>
            <Nav.Link eventKey="main">Picks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="popular">Popular Movies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="trending">Trending Movies</Nav.Link>
          </Nav.Item>
        </Nav>

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

    </div>
  );
}

export default App;
