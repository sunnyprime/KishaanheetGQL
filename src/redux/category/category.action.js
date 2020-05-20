import {setAlert} from '../alert/alerts.actions';

export const addcategory = (categorydata) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('category').add({
      ...categorydata,
      createdAt: new Date(),
    }).then(()=>{
      dispatch({type: 'CREATE_CATEGORY', categorydata});
      dispatch(setAlert('Category Added', 'success'));
    }).catch((err) => {
      dispatch({type: 'CREATE_CATEGORY_ERROR', err});
      dispatch(setAlert('Category Error', 'error'));
    });
  };
};

export const addproduct = (productdata) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('product').add({
      ...productdata,
      createdAt: new Date(),
    }).then(()=>{
      dispatch({type: 'CREATE_CATEGORY', productdata});
      dispatch(setAlert('Category Added', 'success'));
    }).catch((err) => {
      dispatch({type: 'CREATE_CATEGORY_ERROR', err});
      dispatch(setAlert('Category Error', 'error'));
    });
  };
};
