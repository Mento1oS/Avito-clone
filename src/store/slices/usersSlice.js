import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    numberVisibility: false,
    currentUser: {
      id: '',
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
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    setNumberVisibility(state, action) {
      state.numberVisibility = action.payload;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setEditUserForm(state, action) {
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
