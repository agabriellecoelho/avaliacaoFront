import { Link } from "react-router-dom";
import "./navbar.css";
import { GiGamepad } from "react-icons/gi";

export default function Navbar() {
    return (
        <>
        <div className="container-navbar">
            <GiGamepad className="navbar-text"/>
            <span className="navbar-items"><Link to={'/app/home'}>Início</Link></span>
        </div>
        </>
    )
}