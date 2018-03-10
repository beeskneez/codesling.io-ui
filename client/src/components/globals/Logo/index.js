import React from 'react';
import { Link } from 'react-router-dom';

import codeslingLogo from './codesling-logo.svg';

const Logo = ({
  className
}) => {
  return (
    <Link to='/home'>
      <a>
        <img 
          alt="Codesling.io Logo"
          className={`logo ${className ? className : ''}`}
          src={codeslingLogo}
        />
      </a>
    </Link>
  );
};

export default Logo;
