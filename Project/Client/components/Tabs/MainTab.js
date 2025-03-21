// src/components/Tabs/MainTab.js
import React from 'react';
import Buttons1 from '../Buttons1';
import Buttons2 from '../Buttons2';
import Buttons3 from '../Buttons3';
import Buttons4 from '../Buttons4';
import Buttons5 from '../Buttons5';
import Searchbar from '../Searchbar';
import '../styles.css'; 

function MainTab() {
  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        <p><li><Buttons1 /></li></p>
        <p><li><Buttons3 /></li></p>
        <p><li><Buttons2 /></li></p>
        <p><li><Buttons4 /></li></p>
        <p><li><Buttons5 /></li></p>
      </ul>

      <Searchbar />

      <div className="d-flex justify-content-center mt-4">
        <img src="/Assets/Asset1.jpg" alt="Jaws movie poster" className="img-fluid mx-4 shrinked-image" />
        <img src="/Assets/Asset2.jpg" alt="Jurassic Park movie poster" className="img-fluid mx-4 shrinked-image" />
        <img src="/Assets/Asset3.jpg" alt="Star Wars movie poster" className="img-fluid mx-4 shrinked-image" />
      </div>
    </div>
  );
}

export default MainTab;
