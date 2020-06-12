import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import Carty from '../../component/Cart/Carty';
// const {auth}

function Cart(props) {
  const {uid} = props;

  if (uid) {
    return (
      <div>
        <Carty uid={uid}/>
      </div>
    );
  } else {
    return (<>Loading...</>);
  }
}


const mapStateToProps = (state) => {
  // console.log('Carttttttt');

  // console.log(state.firebase.auth);

  return {
    uid: state.firebase.auth.uid,
    cart: state.firestore.ordered.users,
    test: state.firestore.ordered.test,
  };
};
export default compose(
    connect( mapStateToProps, null),
    firestoreConnect([{
      collection: 'users',
    }]),
)(Cart);

// export default compose(

//     connect(mapStateToProps, mapDispatchToProps), // Before firestoreConnect
//     firestoreConnect((props) => [
//       {
//         collection: 'users',
//         storeAs: 'memberships',
//         where: [['user.uid', '==', props.auth.uid]],
//       },
//     ]),
// )(Cart);
