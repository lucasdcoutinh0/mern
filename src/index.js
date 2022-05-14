import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Songs from './pages/Songs';
import Movies from './pages/Movies';
import Series from './pages/Series';
import 'bulma/css/bulma.min.css';
import './styles/main.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/songs" element={<Songs/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/series" element={<Series/>}/>
    </Routes>
  </BrowserRouter>
);


