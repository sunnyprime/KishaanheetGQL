/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// <PrivateRoute exact path="/dashboard" component={Dashboard} />

const PrivateRoute = ({auth: {isEmpty}, ...rest
}) => (
  <Route
    {...rest}
    render = {(props) =>
            isEmpty ? (
<Redirect to="/Login" /> ) :(<Component {...props}/>)
    } />
);


// PrivateRoute.PropTypes = {
//   auth: PropTypes.object.isRequired,
// };
const mapStateToProps = (state) => (

  {
    auth: state.firebase.auth,
  });

export default connect(mapStateToProps)(PrivateRoute)
;
