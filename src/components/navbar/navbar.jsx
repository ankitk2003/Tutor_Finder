import React from 'react';
import './navbar.css';
import {Route, Routes, Link } from 'react-router-dom';
import Home from '../home/home'; // Assuming you have a Home component
import Login from '../login/login'; // Assuming you have a Login component
import FindTutor from '../findTutor/tutor';
function Navbar() {
  return (
  <>
          <nav className="navbar">
        <div className="container">
          <span className="navbar-logo">Tutor Connect</span>
          <ul className="navbar-links">
            <li className="navbar-link"> <Link to="/">Home</Link></li>
            <li className="navbar-link"><Link to="/findTutors">Find Tutors</Link></li>
            <li className="navbar-link"><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/findTutors' element={<FindTutor/>}></Route> 
        <Route path='/login' element={<Login/>}></Route>
     </Routes> 
     </>
  );
}

export default Navbar;
