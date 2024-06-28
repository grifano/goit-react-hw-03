import css from "./Notification.module.css";

export default function Notification({ text }) {
  return (
    <div className={css.notification}>
      <p className={css.notificationText}>{text}</p>
    </div>
  );
}
