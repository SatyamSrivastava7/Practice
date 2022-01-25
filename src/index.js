import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './components/layout/Navigation';

import Home from './pages/home';
import Menu  from './pages/menu';
import Services from './pages/services';
import Shop from './pages/shop';
//import Search from './components/layout/Search';

ReactDOM.render(
  <BrowserRouter>
  <Navigation/>
  <Routes>
    <Route exact path= "/" element={<Home/>}/>
    <Route exact path= "/menu" element={<Menu/>}/>
    <Route exact path= "/services" element={<Services/>}/>
    <Route exact path= "/shop" element={<Shop/>}/>
  </Routes>
  
  </BrowserRouter>,
  document.getElementById('root')
);