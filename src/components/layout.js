import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../css/base.scss';

const ListLink = props => (
  <Link to={props.to} className="navbar-item">
    {props.children}
  </Link>
);

export default ({ children }) => (
  <Fragment>
    <Helmet
      defaultTitle="Pooya Jaferian's Homepage"
      titleTemplate="Pooya Jaferian | %s"
    />

    <section className="hero is-grey is-fullheight">
      <div className="hero-head">
        <nav className="navbar is-dark">
          <div className="container">
            <div id="navMenu" className="navbar-menu">
              <ListLink to="/">Home</ListLink>
              <ListLink to="/work/">Work</ListLink>
              <ListLink to="/academic/">Academic</ListLink>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">{children}</div>

      <div class="hero-foot">
        <nav class="tabs is-right">
          <div class="container">
            <ul>
              <li>
                <a href="http://instagram.com/pooyaj">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/pooyaj">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </li>
              <li>
                <a href="http://ca.linkedin.com/pub/pooya-jaferian/10/535/613">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </li>

              <li>
                <a href="https://github.com/pooyaj">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </li>
              <li>
                <a href="mailto:pooyaj@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </Fragment>
);
