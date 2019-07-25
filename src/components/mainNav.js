import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';

const ListLink = props => (
  <Link to={props.to} className="navbar-item">
    {props.children}
  </Link>
);

export default class MainNav extends Component {
  state = { expanded: false };

  render() {
    const burgerClasses = classnames({
      'navbar-burger': true,
      'is-active': this.state.expanded
    });
    const menuClsses = classnames({
      'navbar-menu': true,
      'is-active': this.state.expanded
    });
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <a
              role="button"
              className={burgerClasses}
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
              onClick={() =>
                this.setState(({ expanded }) => ({ expanded: !expanded }))
              }
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navMenu" className={menuClsses}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/work/">Work</ListLink>
            <ListLink to="/academic/">Academic</ListLink>
            <ListLink to="/resume/">Resume</ListLink>
          </div>
        </div>
      </nav>
    );
  }
}
