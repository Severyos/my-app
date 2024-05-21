import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import logo from '../assets/600f02fca5bbffc0915b9833_humanprogress_logo_450.jpg';

const NavLink = styled(Link)({
  color: '#00416A', // Darker blue text color
  textDecoration: 'none',
  fontSize: '1.1rem',
  marginLeft: 20,
  fontWeight: 'bold', // Bold text
});

const Logo = styled('img')({
  height: 40,
  marginRight: 'auto',
});

const WhiteNavbar = styled(AppBar)({
  backgroundColor: '#fff',
});

const Navbar = () => {
  return (
    <WhiteNavbar position="static">
      <Toolbar>
        <Link to="/home">
          <Logo src={logo} alt="My App Logo" />
        </Link>
        <NavLink to="/boende">Boenden</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
        <NavLink to="/about">Om oss</NavLink>
        <NavLink to="/human">Mer</NavLink>
      </Toolbar>
    </WhiteNavbar>
  );
};

export default Navbar;
