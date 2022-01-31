import { configureStore } from '@reduxjs/toolkit';
import valStatusV1Slice from './valStatusV1Slice';

export default configureStore({
  reducer: {
    status: valStatusV1Slice,
  },
});
