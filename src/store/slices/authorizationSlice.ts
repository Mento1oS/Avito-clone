import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrueFalse, SignInForm, SignUpForm } from '../../types/types';

type InitialState = {
  signInForm: SignInForm;
  signUpForm: SignUpForm;
  access_token: string;
  refresh_token: string;
  isAuthorized: boolean;
  isLogInFromError: TrueFalse;
  isSignUpFormError: TrueFalse;
  isAlreadyRegisteredError: TrueFalse;
  isLogInWrong: TrueFalse;
};

const initialState: InitialState = {
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
};

const authorizationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignInForm(state, action: PayloadAction<SignInForm>) {
      state.signInForm = action.payload;
    },
    setSignUpForm(state, action: PayloadAction<SignUpForm>) {
      state.signUpForm = action.payload;
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.access_token = action.payload;
    },
    setRefreshToken(state, action: PayloadAction<string>) {
      state.refresh_token = action.payload;
    },
    setAuthorizationStatus(state, action: PayloadAction<boolean>) {
      state.isAuthorized = action.payload;
    },
    setIsLogInFormError(state, action: PayloadAction<TrueFalse>) {
      state.isLogInFromError = action.payload;
    },
    setIsSignUpFormError(state, action: PayloadAction<TrueFalse>) {
      state.isSignUpFormError = action.payload;
    },
    setIsAlreadyRegisteredError(state, action: PayloadAction<TrueFalse>) {
      state.isAlreadyRegisteredError = action.payload;
    },
    setIsLogInWrong(state, action: PayloadAction<TrueFalse>) {
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
