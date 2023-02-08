import React, { Component } from 'react';
import css from './Contacts.module.css';
import PropTypes from 'prop-types';
import { ContactsItem } from 'components/ContactsItem/ContacsItem';

export class Contacts extends Component {
  render() {
    const {
      data,
      onInput,
      deleteItem,
      willUnmount,
      handleMouseEnter,
      handleFocus,
    } = this.props;
    return (
      <div className={css.box}>
        <h2 className={css.title}>Contacts</h2>
        <p className={css.description}>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          onChange={onInput}
          className={css.input}
          onFocus={handleFocus}
        />
        <ul>
          {data.map(element => {
            return (
              <ContactsItem
                handleMouseEnter={handleMouseEnter}
                willUnmount={willUnmount}
                key={element.id}
                name={element.name}
                number={element.number}
                handleDelete={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onInput: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  willUnmount: PropTypes.bool.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
};
