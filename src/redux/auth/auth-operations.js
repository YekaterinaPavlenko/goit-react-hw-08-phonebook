import axios from 'axios';
import * as authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'; //'https://goit-phonebook-api.herokuapp.com', 'https://connections-api.herokuapp.com'
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);
    // console.log(response.data.token);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

export const login = credentials => async dispatch => {
  console.log(credentials);

  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);
    // console.log(response.data.token);
    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    const response = await axios.post('/users/logout');
    // console.log(response);
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    console.log(error);
    dispatch(authActions.logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');
    // console.log(response.data);

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

// export default { register, login, logOut, getCurrentUser };
