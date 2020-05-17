const initState = {

  }
  
  const productReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_PRODUCT':
        console.log('create project', action.project);
        return state;
      case 'CREATE_PRODUCT_ERROR':
        console.log('create project error',action.err);
        return state; 
      default:
        return state;
    }
  };
  
  export default productReducer;