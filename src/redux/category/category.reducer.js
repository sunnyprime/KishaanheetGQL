const initState = {

};

const productReducer = (state = initState, action) => {
  // console.log("$$$$$$$");

  // console.log(state);
  // console.log(action);
  // console.log("&&&&&&&");


  switch (action.type) {
    case 'CREATE_CATEGORY':
      console.log('create project', action.project);
      return state;
    case 'CREATE_CATEGORY_ERROR':
      console.log('create project error', action.err);
      return state;
      // case 'CREATE_CATEGORY':
      //   console.log("create Category",action.project);
      //   return {...action.category_data};

    default:
      return state;
  }
};

export default productReducer;
