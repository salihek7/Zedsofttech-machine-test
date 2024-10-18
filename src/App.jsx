import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ListView from './components/ListView';
import DetailView from './components/DetailView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/list" element={<ListView />} />
      <Route path="/detail/:id" element={<DetailView />} />
    </Routes>
  );
}

export default App;
