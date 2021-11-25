import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showCurrentLocation: undefined,
};

export const counterSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setShowCurrentLocation: state => {
            state.showCurrentLocation = {}
        }
    },
});

export default counterSlice.reducer;
export const { setShowCurrentLocation } = counterSlice.actions;
//selector
export const selectShowCurrentLocation = state => state.dataState.showCurrentLocation;