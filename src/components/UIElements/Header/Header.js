import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Global } from '../../../contexts/Global';
import './Header.css';
const Header = () => {
    const {setUser} = useContext(Global);
    const handleLogout = () => {
        localStorage.removeItem('username');
        setUser({});
    };
    return (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <a className="logout" href="#" onClick={handleLogout}> Logout </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
             <Link to="/home"  className="link nav-link">Home</Link>
        </li>

        <li class="nav-item active">
            <Link to="/search" className="link nav-link">Search</Link>
        </li>
       
        </ul>
    </div>
   </nav>
    
    )};

export default Header;


