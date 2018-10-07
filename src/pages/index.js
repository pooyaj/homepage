import React from 'react';
import Layout from '../components/layout';
import main from '../../img/main.jpg';

class Course extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container has-text-centered">
          <div className="column is-8 is-offset-2">
            <h1 className="title">Pooya Jaferian</h1>
            <figure
              className="image is-128x128"
              style={{ margin: '0 auto', marginBottom: 20 }}
            >
              <img className="is-rounded" src={main} alt="Main" />
            </figure>
            <h2 className="subtitle">
              PhD in Computer Engineering from{' '}
              <a
                href="https://www.ubc.ca"
                aria-label="UBC Website"
                alt="UBC Website"
              >
                UBC
              </a>{' '}
              <br /> Engineering Manager at{' '}
              <a
                href="https://www.parsable.com"
                aria-label="Parsable Website"
                alt="Parsable Website"
              >
                Parsable
              </a>
            </h2>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Course;
