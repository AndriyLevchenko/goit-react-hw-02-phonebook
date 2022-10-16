import React from 'react';
import css from 'components/App.module.css';

export const ListContacts = ({contacts, onDeleteContact}) => {
    return (
        <ul>{contacts.map(contact => <li key={contact.id}>
            <p>{contact.name}: {contact.number}</p>
            <button 
            className={css.button} 
            type=""
            onClick={() => onDeleteContact(contact.id)}
            >Delete</button>
            </li>)}
        </ul>
    )
}