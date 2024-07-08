import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "../styles/ContactListItem.module.css";

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.contactListItem} key={id}>
      {name} - {number}
      <button className={styles.deleteContactBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
