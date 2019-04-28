import React from 'react';

import NavLinks from './NavLinks'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="navbar">
          <Link to="/"><div className="navtitle">Hi, I'm Emily</div></Link>
          <hr></hr>
          <NavLinks />
        </div>
    );

}

export default Header
