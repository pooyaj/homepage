import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import Footer from './footer';
import MainNav from './mainNav';
import '../css/base.scss';

import Background from './background';

export default class layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Pooya Jaferian's Homepage</title>

          <meta
            name="description"
            content="Personal website of Pooya Jaferian"
          />
          <link rel="canonical" href="https://pooya.jaferian.com" />
        </Helmet>

        <section className="hero is-grey is-fullheight">
          <Background />
          <div className="hero-head">
            <MainNav />
          </div>
          <div className="hero-body">{children}</div>
          <div class="hero-foot container">
            <Footer />
          </div>
        </section>
      </Fragment>
    );
  }
}
