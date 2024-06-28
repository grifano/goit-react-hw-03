import Button from "../Button/Button";
import css from "./Options.module.css";

export default function Options({ onUpdate, onReset, hasResetButton }) {
  return (
    <ul className={css.optionsList}>
      <li>
        <Button onClick={onUpdate}>Good</Button>
      </li>
      <li>
        <Button onClick={onUpdate}>Neutral</Button>
      </li>
      <li>
        {}
        <Button onClick={onUpdate}>Bad</Button>
      </li>
      <li>
        {hasResetButton && (
          <Button onClick={onReset} isDark={true}>
            Reset
          </Button>
        )}
      </li>
    </ul>
  );
}
