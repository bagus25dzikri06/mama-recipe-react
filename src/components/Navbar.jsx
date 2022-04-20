import React from 'react';
import { Navbar, Collapse, NavbarText,
        Nav, NavItem, NavLink, Form } from 'reactstrap';
import style from '../assets/styles/styles';

const NavigationBar = () => {
    return (
      <Navbar
        style={style.transparentNavbar}
        expand="md"
      >
            <Collapse navbar>
              <Nav
                className="me-auto"
                navbar
              >
                <NavItem>
                  <NavLink href="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/add">
                    Add Recipe
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/321">
                    Profile
                  </NavLink>
                </NavItem>
              </Nav>
              <NavbarText>
                <Form className="d-flex">
                  <img 
                    className="me-2"
                    src="../images/c30684b8c9f51549341bcf29a94922ed.svg" 
                    alt="Login_Icon"
                    width="50px"
                    height="50px"
                  />
                  <a className="nav-link login" href="/login">Login</a>
                </Form>
              </NavbarText>
            </Collapse>
      </Navbar>
    );
};

export default NavigationBar;