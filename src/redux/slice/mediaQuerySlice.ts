import { createSlice } from '@reduxjs/toolkit';
import type { MediaQuerySlice } from '../../interfaces/slice.interface';

type SetMediaQueryState = Pick<MediaQuerySlice, 'isMedium'>;

const initialState: MediaQuerySlice = {
    MEDIUM: 1200,
    isMedium: false,
};

const mediaQuerySlice = createSlice({
    name: 'mediaQuery',
    initialState,
    reducers: {
        setMediaState(state, action) {
            state.isMedium = (action.payload as SetMediaQueryState).isMedium;
        },
    },
});

export const { setMediaState } = mediaQuerySlice.actions;
export default mediaQuerySlice.reducer;
