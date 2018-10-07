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
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Pooya Jaferian's Homepage</title>

      <meta name="description" content="Personal website of Pooya Jaferian" />
      <link rel="canonical" href="https://pooya.jaferian.com" />
    </Helmet>

    <section className="hero is-grey is-fullheight">
      <div className="hero-head">
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
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
                <a
                  href="http://instagram.com/pooyaj"
                  aria-label="Instagram"
                  alt="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/pooyaj"
                  aria-label="Twitter"
                  alt="Twitter"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </li>
              <li>
                <a
                  href="http://ca.linkedin.com/pub/pooya-jaferian/10/535/613"
                  aria-label="LinkedIn"
                  alt="LinkedIn"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/pooyaj"
                  aria-label="Github"
                  alt="Github"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:pooyaj@gmail.com"
                  aria-label="Email Pooya"
                  alt="Email Pooya"
                >
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
