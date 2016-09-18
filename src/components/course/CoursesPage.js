/* eslint-disable */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
/* eslint-enable */

import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: ''}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.courseRow = this.courseRow.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course: course
    });
  }

  onClickSave() {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}/>
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}/>
      </div>
    );
  }
}
CoursesPage.propTypes= {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  "use strict";
  // state.courses, the "courses" came from the rootReducers' return property
  // refer to reducers/index.js
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
