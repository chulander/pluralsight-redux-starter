/* eslint-disable */

import React, {Component} from 'react';
import {Link} from 'react-router';

/* eslint-enable */

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Adminstration</h1>
        <p>React, Reduct, and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;