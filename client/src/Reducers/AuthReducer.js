import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_REQUEST,
    LOGOUT,
    USER_LOADED,
    AUTH_ERROR,
  } from '../Constants/AuthConstant';
  
  const intialState = {
    token: localStorage.getItem('token'),
    loading: false,
    isAuthenticated: null,
    user: null,
    error: null,
  };
  function AuthReducer(state = intialState, action) {
    const { type, payload } = action;
    switch (type) {
      case USER_LOADED:
        return {
          ...state, 
          isAuthenticated: true,
          loading: false,
          user: payload,
        };
      case USER_SIGNIN_REQUEST:
        return {
          loading: true,
        };
      case USER_REGISTER_REQUEST:
        return {
          loading: true,
        };
      case USER_SIGNIN_SUCCESS:
      case USER_REGISTER_SUCCESS: {
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
        };
      }
      case USER_REGISTER_FAIL:
      case AUTH_ERROR:
      case USER_SIGNIN_FAIL:
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
          error: payload,
          token:null,
          isAuthenticated: false,
          loading: false,
        };
  
      default:
        return state;
    }
  }
  export { AuthReducer };
  
  