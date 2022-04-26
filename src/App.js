import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Login from './Login.js';
import { Route, Routes, Navigate, Link, withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Test from './Test';
import QCM from './Components/Chapters/Chapter1/Qcm.js';
import Concept from './Components/Chapters/Chapter1/concept';
import Scoreboard from './Components/Scoreboard/Scoreboard';
import { Table } from 'reactstrap'
import Scoreboardd from './Components/Scoreboard/Scoreboard2';
import Menu from './Components/HomePage/Menu';
import Profile from './Components/Profile/Profile';
import Chapters from './Components/Chapters/Chapters';
import Concept2 from './Components/Chapters/Chapter1/concept2';
import Concept3 from './Components/Chapters/Chapter1/concept3';

import Concept21 from './Components/Chapters/Chapter2/concept21';
import Concept22 from './Components/Chapters/Chapter2/concept22';
import Concept24 from './Components/Chapters/Chapter2/concept24';
import Concept26 from './Components/Chapters/Chapter2/concept26';
import Concept29 from './Components/Chapters/Chapter2/concept29';

import QCM21 from './Components/Chapters/Chapter2/qcm21';
import QCM22 from './Components/Chapters/Chapter2/qcm22';
import QCM23 from './Components/Chapters/Chapter2/qcm23';
import QCM24 from './Components/Chapters/Chapter2/qcm24';
import QCM25 from './Components/Chapters/Chapter2/qcm25';
import QCM26 from './Components/Chapters/Chapter2/qcm26';
import QCM27 from './Components/Chapters/Chapter2/qcm27';
import QCM28 from './Components/Chapters/Chapter2/qcm28';
import QCM29 from './Components/Chapters/Chapter2/qcm29';
import QCM210 from './Components/Chapters/Chapter2/qcm210';

function App() {
  return (
    // <Router>
    //   <Routes>  
    //     <Navigate exact from="/" to="/login" />
    //     <Route path="/login" component={Login} />
    //     {/* <Route path="/menu" component={Menu} /> */}
    //   </Routes>
    // </Router>
    // <Login />
    // <QCM />
    // <Concept />
    // <Scoreboard />
    // <Scoreboardd />
    // <Menu />
    <div classname="test">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Scoreboard" element={<Scoreboardd />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Chapters/Chapters" element={<Chapters />} />
        <Route path="/chapter1/concept" element={<Concept />} />
        <Route path="/chapter1/about" element={<QCM />} />

        <Route path="/concept2" element={<Concept2 />} />

        <Route path="/concept3" element={<Concept3 />} />

        <Route path="/chapter2/concept21" element={<Concept21 />} />
        <Route path="/chapter2/about21" element={<QCM21 />} />

        <Route path="/chapter2/concept22" element={<Concept22 />} />
        <Route path="/chapter2/about22" element={<QCM22 />} />
        <Route path="/chapter2/about23" element={<QCM23 />} />

        <Route path="/chapter2/concept24" element={<Concept24 />} />
        <Route path="/chapter2/about24" element={<QCM24 />} />
        <Route path="/chapter2/about25" element={<QCM25 />} />

        <Route path="/chapter2/concept26" element={<Concept26 />} />
        <Route path="/chapter2/about26" element={<QCM26 />} />
        <Route path="/chapter2/about27" element={<QCM27 />} />
        <Route path="/chapter2/about28" element={<QCM28 />} />

        <Route path="/chapter2/concept29" element={<Concept29 />} />
        <Route path="/chapter2/about29" element={<QCM29 />} />
        <Route path="/chapter2/about210" element={<QCM210 />} />

      </Routes>
    </div>
  );
}

export default App;
