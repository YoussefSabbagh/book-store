import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
  currentUser: null,
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.currentUser = {
        name: 'prueba',
        last_name: 'last',
        correo: 'nam@ho.com',
      };
    },
  },

  logout: (state, action) => {
    state.userState = action.payload.userState;
  },
});

export const { login, logout } = userSlice.actions;

export const selectUserState = (state) => state.User;

export default userSlice.reducer;
