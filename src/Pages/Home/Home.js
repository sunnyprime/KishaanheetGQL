/* eslint-disable require-jsdoc */
import React from 'react';
import './Home.scss';
import Cards from './Cards';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
// import { Redirect } from 'react-router-dom'

// This is @home screen
function Home() {
  return (
    <div>
      <Cards />
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
