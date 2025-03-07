import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import Buttons1 from './components/Buttons1';
import Buttons2 from './components/Buttons2';
import Buttons3 from './components/Buttons3';
import Buttons4 from './components/Buttons4';
import Buttons5 from './components/Buttons5';
import './components/styles.css'; 
import Searchbar from './components/Searchbar';

//next step is adding background image, having a lot of trouble

function App() {
  return (
    <div className="App">
        <div className="d-flex justify-content-center align-items-center">
            <h1>Movie Recommendation Application</h1>
        </div>

    <div className="d-flex justify-content-center align-items-center">
    <h6>Select from the buttons or input a custom search!</h6>
    </div>

    <ul style={{ listStyleType: 'none' }}>
    <p><li><Buttons1 /></li></p>
    <p><li><Buttons3 /></li></p>
    <p><li><Buttons2 /></li></p>
    <p><li><Buttons4 /></li></p>
    <p><li><Buttons5 /></li></p>
    </ul>

    <Searchbar />

 <div className="d-flex justify-content-center mt-4">
 <img src="/Assets/Asset1.jpg" alt="Jaws movie poster" className="img-fluid mx-4" style={{ width: '270px', height: '400px' }}  />
 <img src="/Assets/Asset2.jpg" alt="Jurassic Park movie poster" className="img-fluid mx-4" style={{ width: '270px', height: '400px' }}  />
 <img src="/Assets/Asset3.jpg" alt="Star Wars movie poster" className="img-fluid mx-4" style={{ width: '270px', height: '400px' }}  />


    </div>
  </div>
  );
}

export default App;
