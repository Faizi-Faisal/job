import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './BottomNavBar.css'; // Ensure this CSS file is correctly imported

const BottomNavBar = () => {
  const location = useLocation();

  return (
    <Nav className="bottom-nav justify-content-around">
      <Nav.Item>
        <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
          <i className="fas fa-home"></i><br />Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/work-history" className={location.pathname === '/work-history' ? 'active' : ''}>
          <i className="fas fa-history"></i><br />Work History
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/payments" className={location.pathname === '/payments' ? 'active' : ''}>
          <i className="fas fa-wallet"></i><br />Payments
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>
          <i className="fas fa-user"></i><br />Profile
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default BottomNavBar;
