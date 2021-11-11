import axios from 'axios';
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  // CLEAR_PROFILE,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
} from '../Constants/AuthConstant';

import setAuthToken from '../tokenSetter/SetAuthToken';


//load user
const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const { data } = await axios.get('/api/users');
    dispatch({
      type: USER_LOADED,
      payload: data,
    });
   
  } catch (err) { 
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Login user
const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    paylod: { email, password },
  });
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const { data } = await axios.post('/api/users/signin', body, config);
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    dispatch(loadUser());

  } catch (err) {
   
    const error = err.response.data.errors;
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error,
    });
  }
};
//Register a new user
const register = (name, email, password) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    paylod: { name, email, password },
  }); 
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const { data } = await axios.post('/api/users/register', body, config);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
    dispatch(loadUser());
   
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({
      type: USER_REGISTER_FAIL,
      payload: errors,
    });
  }
};
const logout = () => (dispatch) => {
  

  dispatch({ type: LOGOUT });
};

export { signin, register, logout, loadUser };
