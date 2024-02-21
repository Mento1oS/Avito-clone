import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User_Sys, EditUserForm } from '../../types/types';

type InitialState = {
  users: User_Sys[];
  numberVisibility: boolean;
  currentUser: User_Sys;
  editUserForm: EditUserForm;
};

const initialState: InitialState = {
  users: [],
  numberVisibility: false,
  currentUser: {
    id: 0,
    name: '',
    email: '',
    city: '',
    avatar: '',
    sells_from: '',
    phone: '',
    role: '',
    surname: '',
  },
  editUserForm: {
    name: '',
    lastName: '',
    city: '',
    phone: '',
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User_Sys[]>) {
      state.users = action.payload;
    },
    setNumberVisibility(state, action: PayloadAction<boolean>) {
      state.numberVisibility = action.payload;
    },
    setCurrentUser(state, action: PayloadAction<User_Sys>) {
      state.currentUser = action.payload;
    },
    setEditUserForm(state, action: PayloadAction<EditUserForm>) {
      state.editUserForm = action.payload;
    },
  },
});

export const {
  setUsers,
  setNumberVisibility,
  setCurrentUser,
  setEditUserForm,
} = usersSlice.actions;

export default usersSlice.reducer;
