
import filterReducer, { FilterState, paginate } from './filterSlice';


describe('filter reducer', () => {
  const initialState: FilterState = {

    page: 1,
  };
  it('should handle initial state', () => {
    expect(filterReducer(undefined, { type: 'unknown' })).toEqual({
      page: 1,
    });
  });

  it('should set new page', () => {
    const actual = filterReducer(initialState, paginate(11));
    expect(actual.page).toEqual(11);
  });
});
