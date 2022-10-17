import React from "react"; 
import { Outlet } from "react-router-dom"; 

const Navbar = () => {
    return (
        <nav>
            <Link to = "Settings">Settings</Link>
            <Link to = "About">About us</Link>
            <Link to = "Puppies">All puppies</Link>
        </nav>
    )
}; 

export default Navbar