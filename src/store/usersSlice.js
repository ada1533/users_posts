import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

let Api ='https://jsonplaceholder.typicode.com/users'
export const fetchUser = createAsyncThunk('users/fetchUser', async (id) => {
  const response = await axios.get(`${Api}/${id}`);
  return response.data;
});

const usersSlice = createSlice({
  name: 'user',
  initialState: {
     user: []
     },
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled]:(state,action) => {
      state.user = action.payload
      console.log(action.payload);
    }
  },
});

export const selectUser = (state) => state.users.user;

export default usersSlice.reducer;
