import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showCurrentLocation: undefined,
    showBusStations: undefined,
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
    },
});

export default counterSlice.reducer;
export const actions = counterSlice.actions;
export const selectData = state => state.dataState;