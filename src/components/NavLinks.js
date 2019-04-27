import React from 'react';
import { Link } from "react-router-dom";

const NavLinks = () => {

    return (
        <div className="navlinks">
          <Link to="/about">Authenticity</Link>
          <Link to="/projects">Growth</Link>
          <Link to="/contact">Empathy</Link>
        </div>
    );

}

export default NavLinks
