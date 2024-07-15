import React, { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import styles from "../styles/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact,  removeContact, fetchContacts } from "../redux/operations/index";
import { setFilter } from "../redux/slices/filterSlice";



const App = () => {
  const { loading, error, items: contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error !== null) {
      alert(error);
    }
  }, [error]);

  const addNewContact = (newContact) => {
    dispatch(addContact(newContact));
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

