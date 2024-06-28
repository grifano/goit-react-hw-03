import clsx from "clsx";
import css from "./Button.module.css";

export default function Button({ children, onClick, isDark }) {
  return (
    <button
      className={clsx(css.buttonPrimary, isDark && css.isDark)}
      type="button"
      onClick={() => {
        onClick(children);
      }}
    >
      {children}
    </button>
  );
}
