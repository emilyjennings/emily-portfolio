import React from 'react';
import { Link } from "react-router-dom";

const NavLinks = () => {

    return (
        <div className="navlinks">
          <Link to="/about">Authenticity</Link>
          <Link to="/">Growth</Link>
          <Link to="/">Empathy</Link>
        </div>
    );

}

export default NavLinks
