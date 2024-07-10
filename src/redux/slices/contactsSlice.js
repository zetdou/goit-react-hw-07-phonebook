import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "../operations";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(addContact.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(removeContact.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(removeContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter(contact => contact.id !== action.payload);
        })
        .addCase(removeContact.rejected, (action, payload) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export default contactsSlice.reducer;