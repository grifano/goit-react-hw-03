import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ value, onSearch }) {
  const searchInput = useId();

  return (
    <label htmlFor={searchInput} className={css.searchBoxLabel}>
      Find contacts by name
      <input
        type="text"
        id={searchInput}
        className={css.searchBoxInput}
        value={value}
        onChange={(evt) => onSearch(evt.target.value)}
      />
    </label>
  );
}
