import React from 'react';

import NavLinks from './NavLinks'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="navbar">
          <Link to="/"><div className="navtitle">Hi, I'm Emily</div></Link>
          <div className="navsubtitle"></div>
          <NavLinks />
        </div>
    );

}

export default Header
