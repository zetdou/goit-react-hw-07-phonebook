import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import styles from "../styles/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact, removeContact } from "../redux/slices/contactsSlice";
import { setFilter } from "../redux/slices/filterSlice";


const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      JSON.parse(savedContacts).forEach(contact => dispatch(addContact(contact)));
    }
  }, [dispatch]);

  useEffect (() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = (newContact) => {
    if (contacts.some((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const handleFilterChange = (ev) => {
    dispatch(setFilter(ev.currentTarget.value));
  };

  const removeExistingContact = (id) => {
    dispatch(removeContact(id));
  };

  const filteredContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <h1 className={styles.firstHeading}>Phonebook</h1>
        <ContactForm onSubmit={addNewContact} />

        <h2 className={styles.secondHeading}>Contacts</h2>
        <Filter filter={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={removeExistingContact}
        />
      </>
    );
  };

  export default App;

