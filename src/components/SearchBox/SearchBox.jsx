import css from "./SearchBox.module.css";
import { useId, useState } from "react";

export default function SearchBox() {
  const searchInput = useId();
  const [inputValue, setInputValue] = useState("");
  const handleInput = (evt) => {
    setInputValue(evt.target.value);
  };
  return (
    <label htmlFor={searchInput} className={css.searchBoxLabel}>
      Find contacts by name
      <input
        type="text"
        id={searchInput}
        className={css.searchBoxInput}
        value={inputValue}
        onChange={handleInput}
      />
    </label>
  );
}
