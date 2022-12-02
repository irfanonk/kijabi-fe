import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';


export interface FilterState {
  page: number;
}

const initialState: FilterState = {
  page: 1,
};



export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    paginate: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { paginate } = filterSlice.actions;

export const selectFilters = (state: RootState) => state.filters;




export default filterSlice.reducer;
