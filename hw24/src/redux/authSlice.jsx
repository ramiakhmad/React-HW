import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
    tokenExpires: localStorage.getItem('tokenExpires'),
  },
  reducers: {
    login: (state, action) => {
      const tokenExpires = new Date().getTime() + 7 * 24 * 60 * 60 * 1000; // Токен действует 7 дней

      state.token = action.payload.token;
      state.user = action.payload.user;
      state.tokenExpires = tokenExpires;

      // Сохраняем данные в localStorage
      localStorage.setItem('token', state.token);
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('tokenExpires', tokenExpires);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.tokenExpires = null;

      // Удаляем данные из localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('tokenExpires');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
