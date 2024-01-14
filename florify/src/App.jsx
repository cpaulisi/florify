import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <input type="file" accept="image/png" onChange={handleImageUpload} />
        <div className="image-container">
          {selectedImage && <img src={selectedImage} alt="Selected" class="uploaded-image" />}
      </div>
      </div>
      
      <footer>
        <img src={viteLogo} className="App-logo" alt="logo" />
      </footer>
      
    </div>
  );
}

export default App
