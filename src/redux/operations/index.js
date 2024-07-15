import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiClient = axios.create({
    baseURL: "https://668c1f1c0b61b8d23b0c7a63.mockapi.io/api/v1",
});

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
    const { data } = await apiClient.get("/contacts");
    return data;
});

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, { getState, rejectWithValue }) => {
    try {
        const { contacts } = getState();
        if (contacts.items.some(contact => contact.name === newContact.name)) {
            return rejectWithValue(`${newContact.name} is already in contacts!`);
        }
        const { data } = await apiClient.post("/contacts", newContact);
        return data;
    } catch(error) {
        return rejectWithValue(error.message);
    }
});

export const removeContact = createAsyncThunk("contacts/removeContact", async (id) => {
    await apiClient.delete(`/contacts/${id}`);
    return id;
});

