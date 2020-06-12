import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {reduxFirestore, getFirestore} from 'redux-firestore';

function Carty(props) {
//   console.log(props);
  const userr = JSON.stringify(props.users);
  //   const ref = firebase.database().ref('/users');
  //   console.log(ref);
  //   function writeUserData(userId, name, email, imageUrl) {
  //     firebase.database().ref('users/' + userId).set({
  //       username: name,p
  //       email: email,
  //       profile_picture: imageUrl,
  //     });
  // console.log(name);
  //   }
  //   console.log(writeUserData);
  //   const citiesRef = firestore.collection('users');
  const user = firebase.auth().currentUser;
  const firestore = getFirestore();
  //   const data=firestore.collection('users').where('author', '==', user.uid).get().then((snapshot)=>{
  //     console.log(snapshot.docs[0].data());
  //     // snapshot.docs.foreach((doc) =>{
  //     //   console.log(doc.data());
  //     // });
  //   });
  //   console.log(data);


  //   const user = firebase.auth().currentUser;
  //   const db = firebase.database();

  //   db.collection('stories').where('author', '==', user.uid).get();

  return (
    <div>
            Carty
      {userr}
      {/* {data} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log('Carttttttt');

  // console.log(state.firebase.auth);

  return {
    // uid: state.firebase.auth.uid,
    users: state.firestore.ordered.users,
    test: state.firestore.ordered.test,
  };
};

export default compose(

    connect(mapStateToProps, null), // Before firestoreConnect
    firestoreConnect((props) => [
      {
        collection: 'users',
        // storeAs: 'memberships',
        where: ['users', '==', 'MqlOrpztnYU8pQsjRrQHxqsJZXb2'],
      },
    ]),
)(Carty);
