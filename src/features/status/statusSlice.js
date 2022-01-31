import { createSlice } from '@reduxjs/toolkit';

export const statusSlice = createSlice({
  name: 'status',
  initialState: [],
  reducers: {
    setValues: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text) => {
        return { payload: text };
      },
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValues } = statusSlice.actions;

export default statusSlice.reducer;
