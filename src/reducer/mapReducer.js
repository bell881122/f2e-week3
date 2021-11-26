import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showCurrentLocation: undefined,
    showBusStations: undefined,
    currentLocation: undefined,
};

export const counterSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setShowCurrentLocation: state => {
            state.showCurrentLocation = {}
        },
        setShowBusStations: state => {
            state.showBusStations = {}
        },
        setCurrentLocation: (state, action) => {
            state.currentLocation = action.payload;
        },
    },
});

export default counterSlice.reducer;
export const actions = counterSlice.actions;
export const selectData = state => state.dataState;