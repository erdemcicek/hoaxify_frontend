import * as ACTIONS from "./Constants";
import { login, signUp, logout } from "../api/apiCalls";

export const logoutSuccess = () => {
  return async function (dispatch) {
    try {
      await logout();
    } catch (error) {}
    dispatch({
      type: ACTIONS.LOGOUT_SUCCESS,
    });
  };
  // return {
  //   type: ACTIONS.LOGOUT_SUCCESS,
  // };
};

export const loginSuccess = (authState) => {
  return {
    type: ACTIONS.LOGIN_SUCCESS,
    payload: authState,
  };
};

export const updateSuccess = ({ displayName, image }) => {
  return {
    type: ACTIONS.UPDATE_SUCCESS,
    payload: {
      displayName,
      image,
    },
  };
};

export const loginHandler = (credentials) => {
  return async function (dispatch) {
    const response = await login(credentials);

    const authState = {
      ...response.data.user,
      password: credentials.password,
      token: response.data.token,
    };

    dispatch(loginSuccess(authState));
    //setAuthorizationHeader(credentials);
    return response;
  };
};

export const signupHandler = (user) => {
  return async function (dispatch) {
    const response = await signUp(user);
    await dispatch(loginHandler(user));
    return response;
  };
};
