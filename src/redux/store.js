import { configureStore } from '@reduxjs/toolkit';
import statusSlice from '../features/status/statusSlice';

export default configureStore({
  reducer: {
    status: statusSlice,
  },
});
