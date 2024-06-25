import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBook } from 'react-icons/fa';
import "./navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <Link to="/app/home" className="store-name">Lume</Link>
            <h1 className="nav-title">Central</h1>  
            <nav className="navegar">
                <Link to="/app/cardapio"><FaBook /></Link>
                <Link to="/app/users"><FaUser /></Link>
            </nav>
        </header>
    );
}
