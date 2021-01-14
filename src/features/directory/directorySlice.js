import { createSlice } from '@reduxjs/toolkit';

export const directorySlice = createSlice({
    name: 'directory',
    initialState: {
        notes: []
    },
    reducers: {
        add: (state, action) => {
            state.notes.push(action.payload)
        }
    }
});

export const { add } = directorySlice.actions;

export const noteList = state => state.directory.notes;

export default directorySlice.reducer;