import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchingInProgress(state) {
            state.loading = true;
        },
        fetchingSuccess(state, action) {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        },
        fetchingError(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export default contactsSlice.reducer;
export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactsSlice.actions;