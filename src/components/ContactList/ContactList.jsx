import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  console.log(contacts);
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact name={contact.name} phoneNumber={contact.number} />
          </li>
        );
      })}
    </ul>
  );
}
