import React from 'react';
import { Link } from 'react-router-dom';

import LogoLateral from '../../Assets/images/LogoLateral.svg';
import { Logo } from './style';

const Lateral = () => {
  return (
    <Link to="/">
      <Logo src={LogoLateral} alt="Logo Lateral" />
    </Link>
  );
};

export default Lateral;
