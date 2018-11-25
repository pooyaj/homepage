import React from 'react';
import Layout from '../components/layout';
import main from '../../img/main.jpg';

class Course extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className=" columns">
            <div className="column is-4">
              <figure
                className="image"
                style={{ margin: '0 auto', width: '150px', height: '150px' }}
              >
                <img className="is-rounded shadow" src={main} alt="Main" />
              </figure>
            </div>
            <div className="column is-8 ">
              <h1 className="title">Pooya Jaferian</h1>
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
        </div>
      </Layout>
    );
  }
}

export default Course;
