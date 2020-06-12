
export const addTocart = (items) => {
  console.log(items);

  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    // const olditem = getState().firestore.data.cart;
    // console.log(firestore);
    // console.log('old items');
    // console.log(olditem);

    firestore.collection('cart').add({
      basket: [items],
      //   authorFirstName: profile.firstName,
      //   authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
    }).then(() => {
      dispatch({type: 'CREATE_PROJECT_SUCCESS'});
    }).catch((err) => {
      dispatch({type: 'CREATE_PROJECT_ERROR'}, err);
    });
  };
};
