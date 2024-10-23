import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { BanksListSlice } from '../../interfaces/slice.interface';
import { BanksListItem } from '../../interfaces/component.interface';

const initialState: BanksListSlice = {
    banksList: [],
    stateLoad: {
        isLoad: false,
        error: false,
    },
};

const banksListLoader = createAsyncThunk('banksList/fetchBanksList', async (): Promise<BanksListItem[]> => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL!}/banks`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.json();
});

const banksListSlice = createSlice({
    name: 'banksList',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(banksListLoader.fulfilled, (state, action) => {
                state.banksList = action.payload;
                state.stateLoad.error = false;
                state.stateLoad.isLoad = false;
            })
            .addCase(banksListLoader.pending, (state) => {
                state.stateLoad.error = false;
                state.stateLoad.isLoad = true;
            })
            .addCase(banksListLoader.rejected, (state) => {
                state.stateLoad.error = true;
                state.stateLoad.isLoad = false;
            });
    },
});

export { banksListLoader };
export default banksListSlice.reducer;
