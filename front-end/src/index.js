import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Answers from "./hh/answers";
import Asks from "./hh/asks";
import Services from "./hh/services";
import Pages from "./hh/pages";
import Files from "./hh/files";
import Registrations from "./hh/registrations";
import Register from "./hh/register";
import Login from './hh/login';
import Home from "./hh/home";




ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>

        <Route path="/register" element={<Register />}>

        </Route>

        
        <Route path="/asks" element={<Asks />} />

        <Route path="/answers" element={<Answers />} />

        <Route path="/services" element={<Services />} />

        <Route path="pages" element={<Pages />} />
        
        <Route path="/files" element={<Files />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />}>
         </Route>        
        <Route path="/registrations" element={<Registrations />} />

      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);