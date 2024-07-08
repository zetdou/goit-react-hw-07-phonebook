import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "../styles/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/slices/filterSlice";

const Filter = ({ filter }) => {
  const searchId = nanoid();
  const dispatch = useDispatch();

  const handleFilterChange = (ev) => {
    dispatch(setFilter(ev.currentTarget.value));
  };

  return (
    <div className={styles.filterContainer}>
      <label className={styles.phonebookFormLabels} htmlFor={searchId}>
        Find contact
      </label>
      <input
        className={styles.phonebookFormInputs}
        type="text"
        id={searchId}
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
