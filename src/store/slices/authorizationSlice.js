import { createSlice } from '@reduxjs/toolkit';

const authorizationSlice = createSlice({
  name: 'auth',
  initialState: {
    signInForm: {
      eMail: '',
      password: '',
    },
    signUpForm: {
      eMail: '',
      password: '',
      repPassword: '',
      name: '',
      lastName: '',
      city: '',
    },
    access_token: '',
    refresh_token: '',
    isAuthorized: false,
    isLogInFromError: 'false',
    isSignUpFormError: 'false',
    isAlreadyRegisteredError: 'false',
    isLogInWrong: 'false',
  },
  reducers: {
    setSignInForm(state, action) {
      state.signInForm = action.payload;
    },
    setSignUpForm(state, action) {
      state.signUpForm = action.payload;
    },
    setAccessToken(state, action) {
      state.access_token = action.payload;
    },
    setRefreshToken(state, action) {
      state.refresh_token = action.payload;
    },
    setAuthorizationStatus(state, action) {
      state.isAuthorized = action.payload;
    },
    setIsLogInFormError(state, action) {
      state.isLogInFromError = action.payload;
    },
    setIsSignUpFormError(state, action) {
      state.isSignUpFormError = action.payload;
    },
    setIsAlreadyRegisteredError(state, action) {
      state.isAlreadyRegisteredError = action.payload;
    },
    setIsLogInWrong(state, action) {
      state.isLogInWrong = action.payload;
    },
  },
});

export const {
  setSignInForm,
  setSignUpForm,
  setAccessToken,
  setRefreshToken,
  setAuthorizationStatus,
  setIsLogInFormError,
  setIsSignUpFormError,
  setIsAlreadyRegisteredError,
  setIsLogInWrong,
} = authorizationSlice.actions;

export default authorizationSlice.reducer;
