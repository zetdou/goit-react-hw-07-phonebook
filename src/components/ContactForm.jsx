import React, { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "../styles/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/operations/index";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

    const handleSubmit = (ev) => {
      ev.preventDefault();
      dispatch(addContact({
        id: nanoid(),
        name,
        number,
      }));
      setName("");
      setNumber("");
    };

    const nameId = nanoid();
    const numId = nanoid();

    return (
      <form className={styles.phonebookForm} onSubmit={handleSubmit}>
        <label className={styles.phonebookFormLabels} htmlFor={nameId}>
          Name
        </label>
        <input
          className={styles.phonebookFormInputs}
          id={nameId}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <label className={styles.phonebookFormLabels} htmlFor={numId}>
          Phone number
        </label>
        <input
          className={styles.phonebookFormInputs}
          id={numId}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <button className={styles.phonebookFormBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  };


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;