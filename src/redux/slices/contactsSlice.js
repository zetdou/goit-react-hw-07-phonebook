import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact(state, action) {
            return [...state, action.payload];
        },
        removeContact(state, action) {
            return state.filter((contact) => contact.id !== action.payload);
        },
    },
});

export default contactsSlice.reducer;
export const { addContact, removeContact } = contactsSlice.actions;