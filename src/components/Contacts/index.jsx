import { Component } from "react";
import { nanoid } from "nanoid";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      name: "",
      number: "",
      filter: "",
    };
  }

  handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState((prev) => {
      const list = [...prev.contacts];
      list.push({
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
      });
      return { contacts: list };
    });
  };

  render() {
    const nameId = nanoid();
    const numId = nanoid();
    const searchId = nanoid();

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={nameId}>Name</label>
          <input
            id={nameId}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor={numId}>Phone number</label>
          <input
            id={numId}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
        <h1>Contacts</h1>
        <label htmlFor={searchId}>Find contact</label>
        <input
          type="text"
          id={searchId}
          name="filter"
          value={this.state.filter}
          onChange={this.handleChange}
        />
        <ul>
          {this.state.contacts
            .filter((el) =>
              el.name.toLowerCase().includes(this.state.filter.toLowerCase()),
            )
            .map((contact) => (
              <li key={contact.id}>
                {contact.name} - {contact.number}
              </li>
            ))}
        </ul>
      </>
    );
  }
}
