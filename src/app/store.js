import { configureStore } from '@reduxjs/toolkit';
import createNoteSlice from '../features/create/createSlice';
import directorySlice from '../features/directory/directorySlice';

export default configureStore({
  reducer: {
    create: createNoteSlice,
    directory: directorySlice
  },
});
