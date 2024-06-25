import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBook } from 'react-icons/fa';
import "./navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className="store-name">Lume</Link>
            <h1 className="nav-title">Produtos</h1>  
            <nav className="navegar">
                <Link to="/carrinho"><FaBook /></Link>
                <Link to="/usuario"><FaUser /></Link>
            </nav>
        </header>
    );
}
