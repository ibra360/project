import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import abhi from './Menu.module.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  // NavbarBrand,
  // NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" expand="md">
        <NavItem color="info"><Link className="" to="/">Home</Link></NavItem>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
            <NavItem style={{ marginRight: "12px",color:"white" }}>
              <Link sty to="/postadd">Post Add</Link>
            </NavItem>
            <NavItem style={{ marginRight: "12px",color:"white" }}>
              <Link sty to="/add"></Link>
            </NavItem>
            <NavItem style={{ marginRight: "12px",color:"white" }}>
              <Link sty to="/Login">Login</Link>
            </NavItem>
            <NavItem>
              <Link to="/Contact">Contact Us</Link>
            </NavItem>
        <NavbarToggler onClick={toggle} />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;