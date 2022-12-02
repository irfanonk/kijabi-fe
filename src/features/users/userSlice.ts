
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../redux/store';
import { fetchUser, fetchUsers } from './userApi';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface UsersData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

export interface UserState {
  users: UsersData | null;
  user: User | null,
  status: 'idle' | 'loading' | 'failed';
}



const initialState: UserState = {
  users: null,
  user: null,
  status: 'idle',
};



export const getUsers = createAsyncThunk(
  'getUsers',
  async (args, { getState }) => {
    const state = getState() as RootState
    const filters = state.filters

    const response = await fetchUsers(filters);
    return response
  }
);
export const getUser = createAsyncThunk(
  'getUser',
  async (id: string) => {


    const response = await fetchUser(id);
    return response
  }
);


export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users = action.payload.data;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(getUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload.data;
      })
      .addCase(getUser.rejected, (state) => {
        state.status = 'failed';
      })
  },
});


// export const { } = userSlice.actions;

export const selectUsers = (state: RootState) => state.users;



export default usersSlice.reducer;
