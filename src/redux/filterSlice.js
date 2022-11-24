const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { onFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
