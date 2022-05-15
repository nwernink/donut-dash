import React from 'react';
import Home from './pages/home';
import ContactusPage from './pages/contactus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactus' element={<ContactusPage />} />
        </Routes>
      </Router>
  );
}

export default App;