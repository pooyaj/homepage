import React from 'react';
import Layout from '../components/layout';

class Academic extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container ">
          <h1 className="title">Academic Background</h1>
          <p>
            My PhD research topic was an intersection of Human-Computer
            Interaction (HCI) and Computer Security. I researched how IT
            security professionals perform their job, and explored the usability
            of their toolset. Then I narrowed down my focused to enterprise
            Identity and Access Management (IAM) systems, and explored ways one
            can improve the usability of IAM systems. I used wide varity of UX
            techniques such as semi-structured interviews, in-person and online
            usability studies, heuristic evalution sessions, and focus groups,
            to understand the problem, and build new user interfaces.
          </p>
        </div>
      </Layout>
    );
  }
}

export default Academic;
