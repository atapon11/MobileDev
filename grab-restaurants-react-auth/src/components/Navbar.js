import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function NavBar({currentUser, logOut}) { 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      
      <Navbar className="navbar navbar-expand-lg navbar-dark">
        <NavbarBrand href="/">GrabRestarants</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/Add">
              Add
            </Link>
            <Link className="nav-item nav-link" to="/Search">
              Search
            </Link>
            <Link className="nav-item nav-link" to="/Register">
              Register
            </Link>
            <Link className="nav-item nav-link" to="/Login" onClick={currentUser ? logOut:""}>
              {currentUser ? "LogOut":"Login"}
            </Link>
            <Link className="nav-item nav-link" to="/Profile">
              {currentUser?.username || ""}
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;