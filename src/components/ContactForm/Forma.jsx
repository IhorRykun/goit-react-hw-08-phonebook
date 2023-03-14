import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/phonebook/phonebookOperation';
import { getStoreContacts } from 'Redux/phonebook/phonebookSlice';
import css from '../ContactForm/Forma.module.css';

export const Forma = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactsStore = useSelector(getStoreContacts);

  const handleChange = e => {
    const nameEvent = e.target.name;

    switch (nameEvent) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactIs = contactsStore
      .map(cont => cont.name.includes(name))
      .includes(true);
    if (!contactIs) {
      dispatch(addContact({ name, number }));
    } else {
      alert(`${name} is already in contacts`);
    }
    resetForm();
  };

  return (
    <form className={css.form__add} onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name:
        <input
          className={css.input__name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={css.form__lable}>
        Number:
        <input
          className={css.input__number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={css.button__add} type="submit">
        add contact
      </button>
    </form>
  );
};
