// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lesson0004_FirstReactApp from './components/0004_FirstReactApp';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/0004" element={<Lesson0004_FirstReactApp />} />
      </Routes>
    </Router>
  );
}

export default App;