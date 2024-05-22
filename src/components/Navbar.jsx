import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/humanprogress.png'; // Ensure this image has a transparent background

// Define the Navbar component
const MyNavbar = () => {
  const linkStyle = {
    fontSize: '18px',
    color: '#000',
    marginRight: '15px',
    fontWeight: '600'
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{ marginRight: '50px' }} href="/home">
          <img
            src={logo}
            width="160"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown
              title={<HoverNavDropdownTitle>Humanprogress</HoverNavDropdownTitle>}
              id="basic-nav-dropdown"
              style={linkStyle}
            >
              <CustomNavDropdownItem href="/about">Om Humanprogress</CustomNavDropdownItem>
              <CustomNavDropdownItem href="#action/3.6">Ledord & Kärnvärden</CustomNavDropdownItem>
              <CustomNavDropdownItem href="#action/3.7">Läkepedagogik & Socialterapi</CustomNavDropdownItem>
              <CustomNavDropdownItem href="#action/3.8">Vänorganisationer</CustomNavDropdownItem>
              <CustomNavDropdownItem href="#action/3.9">Arbeta hos oss</CustomNavDropdownItem>
            </NavDropdown>
            <NavDropdown
              title={<HoverNavDropdownTitle>Våra boenden</HoverNavDropdownTitle>}
              id="basic-nav-dropdown"
              style={linkStyle}
            >
              <CustomNavDropdownItem href="#action/3.1">Ungdomsboende - Utsikten</CustomNavDropdownItem>
              <CustomNavDropdownItem href="#action/3.2">Serviceboende - Möllan</CustomNavDropdownItem>
              <CustomNavDropdownItem href="#action/3.3">Gruppbostad - Stinsen</CustomNavDropdownItem>
              <CustomNavDropdownItem href="#action/3.4">Serviceboende - Myrängen</CustomNavDropdownItem>
            </NavDropdown>
            <NavLink href="/contact">Kontakt</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Custom component to handle hover effect for NavDropdown title
const HoverNavDropdownTitle = ({ children }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: isHovered ? '#ff1493' : '#000', // Stronger pink color
        transition: 'color 0.3s',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <span style={{ marginRight: '5px' }}>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        style={{ transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)', marginLeft: 'auto' }}
      >
        <path
          fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 1 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
  );
};

// Custom component to handle hover effect for NavLinks
const NavLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Nav.Link
      href={href}
      style={{
        fontSize: '18px',
        color: isHovered ? '#ff1493' : '#000', // Stronger pink color
        marginRight: '15px',
        fontWeight: '600', // Ensure font weight is set here
        transition: 'color 0.3s',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Nav.Link>
  );
};

// Custom component for NavDropdown.Item to apply hover effect
const CustomNavDropdownItem = ({ href, children }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <NavDropdown.Item
      href={href}
      style={{
        backgroundColor: isHovered ? '#ff1493' : '#fff', // Pink background color
        color: isHovered ? '#fff' : '#000', // White text color on hover
        transition: 'background-color 0.3s, color 0.3s',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </NavDropdown.Item>
  );
};

// Inline CSS to hide default Bootstrap arrows
const style = document.createElement('style');
style.innerHTML = `
  .dropdown-toggle::after {
    display: none !important;
  }
`;
document.head.appendChild(style);

export default MyNavbar;
