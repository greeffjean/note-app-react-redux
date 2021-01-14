import { createSlice } from '@reduxjs/toolkit';

export const createNoteSlice = createSlice({
  name: 'create',
  initialState: {
          heading: "",
          description: ""
  },
  reducers: {
    changeHeading: (state, action) => {
      state.heading = action.payload;
    },
  changeDescription: (state, action) => {
    state.description = action.payload;
    },
    reset: state => {
      state.heading = "";
      state.description = "";
  }
  }
});

export const { changeHeading, changeDescription, reset } = createNoteSlice.actions;


export const noteHeading = state => state.create.heading;
export const noteDescription = state => state.create.description;


export default createNoteSlice.reducer;
