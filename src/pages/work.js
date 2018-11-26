import React from 'react';
import Layout from '../components/layout';

class Work extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <h1 className="title is-size-2-mobile">Work</h1>
          <p className="is-size-6-mobile">
            I'm currently leading the frontend team at Parsable. We use React
            and Go to build a large-scale industry 4.0 collaboration and
            workflow platform to help the world’s largest industrial companies
            get jobs done right—every time. Before joining Parsable, I was the
            technical lead at Hootsuite Labs. Our team was responsible for
            developing disruptive products, experimenting with emerging
            technologies and promoting lean innovation. We successfully shipped
            three products outside Hootsuite's main offering during my time.
          </p>
        </div>
      </Layout>
    );
  }
}

export default Work;
