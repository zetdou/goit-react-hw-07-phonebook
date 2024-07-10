import axios from "axios";
import { fetchingError, fetchingInProgress, fetchingSuccess, addContactSuccess, removeContactSuccess } from "../slices/contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiClient = axios.create({
    baseURL: "https://668c1f1c0b61b8d23b0c7a63.mockapi.io/api/v1",
});

// wykorzystanie domniemanego zwrotu z funkcjami strzałkowymi


// const fetchContacts = () => async (dispatch) => {
//     try {
//         dispatch(fetchingInProgress());
//         const response = await apiClient.get("/contacts")
//         dispatch(fetchingSuccess(response.data));
//     } catch (err) {
//         dispatch(fetchingError(err.message));
//     }
// }

// mechanika jak powyzej ale z wykorzystaniem dosłownych funkcji


export function fetchContacts() {
    return async function (dispatch) {
        try {
            dispatch(fetchingInProgress());
            const response = await apiClient.get("/contacts");
            dispatch(fetchingSuccess(response.data));
        }   catch (err) {
            dispatch(fetchingError(err.message));
        }
    };
};

export function addContact(contact) {
    return async function (dispatch) {
        try {
            dispatch(fetchingInProgress());
            const response = await apiClient.post("/contacts", contact);
            dispatch(addContactSuccess(response.data));
        }   catch (err) {
            dispatch(fetchingError(err.message));
        }
    };
}

export function removeContact(id) {
    return async function (dispatch) {
        try {
            dispatch(fetchingInProgress());
            const response = await apiClient.delete(`/contacts/${id}`);
            dispatch(removeContactSuccess(id));
        }   catch (err) {
            dispatch(fetchingError(err.message));
        }
    };
}

