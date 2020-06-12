const initState = {
  authError: null,
  authid: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login error');

      return {
        ...state,
        authError: 'Login failed',
      };
    case 'LOGIN_SUCCESS':
      console.log('login success');
      // dispatch(setAlert('Login Successful', 'success'));
      return {
        ...state,
        authError: null,
        authid: action.payload,
      };
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return {...state};
    default:
      return {...state};
  }
};

export default authReducer;
