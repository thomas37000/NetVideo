import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';
import "../App.css";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><h1>Movie Club</h1></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/movies">Movies List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/movies-carousel">Carousel</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Genres
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Comedy
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Crime
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Fantasy
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

// import React from "react";
// import { Link } from "react-router-dom";
// import "../App.css";

// function NavBar() {
//   return (
//     <>
//       <header className="App-header">
//           {/* <h1>Movie Club</h1> */}
//           <Link to="/movies-carousel">Carousel</Link>
//           <Link to="/movies">Movie List</Link>
//         </header>
//     </>
//   );
// }

// export default NavBar;