import css from "../App/App.module.css";
import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { nanoid } from "nanoid";
import initialContacts from "../../initialContacts.json";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return initialContacts;
  });

  // Contact form state
  const [formData, setFormData] = useState({ id: "", name: "", number: "" });

  // Search contact
  const [searchValue, setSerachValue] = useState("");
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Add contact
  const addContact = () => {
    const newContact = { ...formData, id: nanoid() };
    if (formData.name && formData.number) {
      setContacts((prevContacts) => {
        return [...prevContacts, newContact];
      });
    }
  };
  useEffect(addContact, [formData]);

  // Delete contact
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  // Save contacts to local storage
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.phonebook}>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <div className={css.phonebookContentWrap}>
          <div className={css.containerCol}>
            <ContactForm initialValue={formData} onSubmit={setFormData} />
          </div>
          <div className={css.containerCol}>
            <div className={css.phonebookContactsWrap}>
              <SearchBox value={searchValue} onSearch={setSerachValue} />
              <ContactList
                contacts={filteredContacts}
                onDelete={deleteContact}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
