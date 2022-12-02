import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';


export interface FilterState {
  page: number;
  email: string;
}

const initialState: FilterState = {
  page: 1,
  email: ''
};



export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    paginate: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    filterByEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },

  },
});

export const { paginate, filterByEmail } = filterSlice.actions;

export const selectFilters = (state: RootState) => state.filters;




export default filterSlice.reducer;
