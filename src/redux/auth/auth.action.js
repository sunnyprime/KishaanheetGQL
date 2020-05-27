import {setAlert} from '../alert/alerts.actions';

export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password,
    ).then(()=>{
      dispatch({type: 'LOGIN_SUCCESS'});
      dispatch(setAlert('Login Successful', 'success'));
    }).catch((err) => {
      dispatch({type: 'LOGIN_ERROR', err});
      dispatch(setAlert(err, 'danger'));
    });
  };
};


export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({type: 'SIGNOUT_SUCCESS'});
      dispatch(setAlert('Logout Successful', 'success'));
    });
  };
}
;

export const signUp = (newUser) => {
  console.log(newUser);

  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password,
    ).then((resp) => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        // initials: newUser.firstName[0] + newUser.lastName[0],
      });
    }).then(() => {
      dispatch({type: 'SIGNUP_SUCCESS'});
      dispatch(setAlert('Signup Successful', 'success'));
    }).catch((err) => {
      dispatch({type: 'SIGNUP_ERROR', err});
      dispatch(setAlert(err, 'danger'));
    });
  };
}
;
