// import firebase from 'firebase/app';
// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Replace this with your own config details
// var firebaseConfig = {
//   apiKey: "AIzaSyBoVmOiaBdJyCj_Wa7zjg5MlSG_NdJq8OM",
//   authDomain: "redux-firebse.firebaseapp.com",
//   databaseURL: "https://redux-firebse.firebaseio.com",
//   projectId: "redux-firebse",
//   storageBucket: "redux-firebse.appspot.com",
//   messagingSenderId: "1084338702282",
//   appId: "1:1084338702282:web:d012ece5762711eb237133",
//   measurementId: "G-1H8FHDRG6T"
// };


const firebaseConfig = {
  apiKey: 'AIzaSyCJawhNmsNuNUEvd_9r0QSqoxbqL664fXQ',
  authDomain: 'kishaanheet.firebaseapp.com',
  databaseURL: 'https://kishaanheet.firebaseio.com',
  projectId: 'kishaanheet',
  storageBucket: 'kishaanheet.appspot.com',
  messagingSenderId: '527862447188',
  appId: '1:527862447188:web:19aa57728ecad9f22101c1',
  measurementId: 'G-VCEKB43MJ5',
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
