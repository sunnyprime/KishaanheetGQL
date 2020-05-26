/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import './Home.scss';
import Cards from './Cards';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
// import Sample from '../auth/Sample';

import UseWindowDimension from './UseWindowDimension';
import Banner from '../../component/Carosoul/Banner';
// import Carosouls from '../../component/Carosoul/Carosouls';

function Home(props) {
  const {width} = UseWindowDimension();
  return (
    <div>
      <Cards category={props.category} width={width}/>
      {/* <Sample /> */}
      <Banner />
      {/* <Carosouls /> */}

    </div>
  );
}


const mapStateToProps = (state) => {
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
