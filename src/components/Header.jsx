// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink, Link} from 'react-router-dom'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <div className="container mx-auto px-5">
        <Navbar.Brand><Link to='/' >LOGO</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link>
              <NavLink to="/">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/shop">Shop</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/about">About</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/contact">Contact</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
