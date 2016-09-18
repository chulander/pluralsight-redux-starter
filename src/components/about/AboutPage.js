/* eslint-disable */

import React, {Component} from 'react';
import {Link} from 'react-router';

/* eslint-enable */

class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other helpful libraries</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default AboutPage;
