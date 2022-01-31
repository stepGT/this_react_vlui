import { createSlice } from '@reduxjs/toolkit';

export const valStatusV1Slice = createSlice({
  name: 'status',
  initialState: {
    values: [],
  },
  reducers: {
    test: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.values += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { test } = valStatusV1Slice.actions;

export default valStatusV1Slice.reducer;
