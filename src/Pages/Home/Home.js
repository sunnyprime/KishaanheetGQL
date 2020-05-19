/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import './Home.scss';
import Cards from './Cards';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import Sample from '../auth/Sample';
// import { Redirect } from 'react-router-dom'

// This is @home screen
function Home(props) {
  // console.log(',,,,');
  // const {category} = props;
  // console.log(category);

  return (
    <div>

      <Sample />
      <Cards category={props.category} />
    </div>
  );
}


const mapStateToProps = (state) => {
  // console.log(".....");

  // console.log(state);

  return {
    category: state.firestore.ordered.category,
    //   auth: state.firebase.auth,
  };
};
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'category',
    }]),
)(Home)
;
