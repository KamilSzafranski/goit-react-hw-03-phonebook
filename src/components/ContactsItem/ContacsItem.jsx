import React, { Component } from 'react';
import css from './ContactsItem.module.css';
import PropTypes from 'prop-types';

export class ContactsItem extends Component {
  componentWillUnmount() {
    if (!this.props.isInputChange) {
      alert(`Contacts: ${this.props.name} was remove`);
    }
  }
  render() {
    const { name, number, handleDelete, handleMouseEnter } = this.props;
    return (
      <li className={css.item}>
        <span>{name}:</span>
        <span> {number}</span>
        <button
          onMouseEnter={handleMouseEnter}
          data-name={name}
          className={css.deleteBtn}
          onClick={handleDelete}
        >
          Delete
        </button>
      </li>
    );
  }
}

ContactsItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  handleDelete: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  isInputChange: PropTypes.bool.isRequired,
};
