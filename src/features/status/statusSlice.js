import { createSlice } from '@reduxjs/toolkit';

export const statusSlice = createSlice({
  name: 'status',
  initialState: {},
  reducers: {
    setValues: (state, action) => (state = action.payload),
  },
});

// Action creators are generated for each case reducer function
export const { setValues } = statusSlice.actions;

export default statusSlice.reducer;
