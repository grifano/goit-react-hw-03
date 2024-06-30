import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ name, phoneNumber, id, onDelete }) {
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <div className={css.contactInfoCol}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.contactInfoCol}>
          <FaPhoneAlt />
          <p>{phoneNumber}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
