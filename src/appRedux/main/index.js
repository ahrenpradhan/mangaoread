import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
// import { createAsyncThunk } from "@reduxjs/toolkit";
// export const GetPosts = createAsyncThunk(
//     "post/getPosts", async () => await axios.get(`${BASE_URL}/posts`)
// );
const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        init: (state, action) => {
            state.isLoaded = true;
            const temp = Object.keys(action.payload);
            for (let i = 0; i < temp.length; i++) {
                state[ temp[ i ] ] = action.payload[ temp[ i ] ]
            }
        },
        colorTheme: (state, action) => {
            switch (action.payload.type) {
                case 'set':
                default:
                    state.theme = action.payload.theme
            }
        },
        reset: (state, action) => {
            const temp = Object.keys(state)
            for (let i = 0; i < temp.length; i++) {
                state[ temp[ i ] ] = initialState[ temp[ i ] ]
            }
        },
    },
    // extraReducers: {
    //     [ GetPosts.fulfilled ]: (state, action) => {
    //         state.posts = action.payload.data;
    //     },
    //     [ GetPosts.rejected ]: (state, action) => {
    //         state.posts = [];
    //     },
    // },
});



export const { init, colorTheme, reset } = mainSlice.actions;

export default mainSlice.reducer;
