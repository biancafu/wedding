import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom'; // Import required components from React Router
import Board from './pages/board';
import Photo from './pages/photo';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/board">Blessing Board</Link>
          </li>
          <li>
            <Link to="/photo">Photo Gallery</Link>
          </li>
        </ul>
      </nav>

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />  {/* Home page route */}
        <Route path="/board" element={<Board />} />  {/* About page route */}
        <Route path="/photo" element={<Photo />} />  {/* About page route */}
      </Routes>
    </div>
  );
}

export default App;
