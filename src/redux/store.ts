

import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import filterSlice from '../features/filter/filterSlice';
import usersSlice from '../features/users/userSlice';




export const store = configureStore({
  reducer: {
    users: usersSlice,
    filters: filterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
