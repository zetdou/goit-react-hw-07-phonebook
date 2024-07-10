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
        },
        addContactSuccess(state, action) {
            state.items.push(action.payload);
        },
        removeContactSuccess(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
    },
});

export default contactsSlice.reducer;
export const { fetchingInProgress, fetchingSuccess, fetchingError, addContactSuccess, removeContactSuccess } = contactsSlice.actions;