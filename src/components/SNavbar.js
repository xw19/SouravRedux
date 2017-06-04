import React from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

export default class SNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" inverse toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <Link to="/" className='navbar-brand'>Sourav Moitra</Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/signin' className='nav-link'>Sign in</Link>
              </NavItem>
              <NavItem>
                <Link to='/signup' className='nav-link'>Sign up</Link>
              </NavItem>
              <NavItem>
                <NavLink href="/articles">Articles</NavLink>
              </NavItem>
              <NavItem>
                <Link to='/about' className='nav-link'>About</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
