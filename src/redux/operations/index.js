import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiClient = axios.create({
    baseURL: "https://668c1f1c0b61b8d23b0c7a63.mockapi.io/api/v1",
});

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
    const { data } = await apiClient.get("/contacts");
    return data;
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact) => {
    const { data } = await apiClient.post("/contacts", contact);
    return data;
});

export const removeContact = createAsyncThunk("contacts/removeContact", async (id) => {
    await apiClient.delete(`/contacts/${id}`);
    return id;
});

