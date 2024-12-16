import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Icone from './modelos/Imagens';
import Header from './Upside/Post';
import Seacher from './Upside/Search';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Icone />} />
        <Route path="/about" element={<Header />} />
        <Route path="/contact" element={<Seacher />} />
      </Routes>
    </Router>
  );
}