import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Answer from "./hh/answer";
import Answers from "./hh/answers";

import Ask from "./hh/ask";
import Asks from "./hh/asks";

import Services from "./hh/services";
import Service from "./hh/service";


import Register from "./hh/register";




ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/login" element={<Login />}>

      </Route> */}
      <Route path="/" element={<App />}>

        <Route path="/register" element={<Register />}>

        </Route>
        <Route path="asks" element={<Asks />}>
          <Route path=":id" element={<Ask />} />
          
        </Route>
        <Route path="/answers" element={<Answers />}>
          <Route path=":id" element={<Answer />} />
          </Route>

          <Route path="/services" element={<Services />}>
          <Route path=":id" element={<Service />} />
          </Route>

        {/* Put two more routes here, for doctor and history */}
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);