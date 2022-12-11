import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const user = await response.json();

  return { user };
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    // builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //   (state.loading = false),
    //     (state.users = action.payload),
    //     (state.error = '');
    // });

    // builder.addCase(fetchUsers.rejected, (state, action) => {
    //   (state.loading = false),
    //     (state.users = []),
    //     (state.error = action.error.message);
    // });
  },
});

export default userSlice.reducer;
