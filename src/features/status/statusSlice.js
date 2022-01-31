import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const { REACT_APP_VAL_API_KEY } = process.env;

const fetchStatus = (region) => {
  axios
    .get(
      `https://${region}.api.riotgames.com/val/status/v1/platform-data?api_key=${REACT_APP_VAL_API_KEY}`
    )
    .then((res) => {
      console.log(res.data);
    });
};

export const statusSlice = createSlice({
  name: 'status',
  initialState: {
    values: [],
  },
  reducers: {
    setValues: (state, action) => {
      console.log('state', state.values);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      fetchStatus(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValues } = statusSlice.actions;

export default statusSlice.reducer;
