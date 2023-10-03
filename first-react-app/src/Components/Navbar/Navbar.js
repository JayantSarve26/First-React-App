import "./Navbar.css"
import {Link} from "react-router-dom";

export default function Navbar(){
    return(

        <div className="navbar">
            <h1 className="nav-brand">ReactJS</h1>

            <Link className="nav-menu" to="/">Home</Link>
            <Link className="nav-menu" to="/about">About</Link>
            <Link className="nav-menu" to="/contact">Contact</Link>
            </div>
    )
}