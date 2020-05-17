import {setAlert} from "../alert/alerts.actions"

export const addcategory = (category_data) => {
    return (dispatch, getState,{getFirebase, getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('category').add({
        ...category_data,
        createdAt: new Date()
      }).then(()=>{
        dispatch({ type: 'CREATE_CATEGORY', category_data });
        dispatch(setAlert('Category Added','success'))
      }).catch((err) => {
        dispatch({type:'CREATE_CATEGORY_ERROR',err})
        dispatch(setAlert('Category Error','error'))
      })
    }
  };