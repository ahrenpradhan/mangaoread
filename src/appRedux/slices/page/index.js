import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
// import { createAsyncThunk } from "@reduxjs/toolkit";
// export const GetPosts = createAsyncThunk(
//     "post/getPosts", async () => await axios.get(`${BASE_URL}/posts`)
// );
const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.theme = action.payload.page
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



export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
