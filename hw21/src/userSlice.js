
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectUsers = (state) => state.users.users;
export default userSlice.reducer;
