import React from 'react';
import { Link } from "react-router-dom";

const NavLinks = () => {

    return (
        <div className="navlinks">
          <div className="navlinks-wrapper">
            <Link to="/about">Authenticity</Link>
            <Link to="/projects">Growth</Link>
            <Link to="/contact">Empathy</Link>
          </div>
        </div>
    );

}

export default NavLinks
