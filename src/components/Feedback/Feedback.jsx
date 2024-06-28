import css from "./Feedback.module.css";

export default function Feedback({ feedbackCount, total, positive }) {
  return (
    <ul className={css.feedbackList}>
      <li>
        <p>
          Good <span>{feedbackCount.good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral <span>{feedbackCount.neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad <span>{feedbackCount.bad}</span>
        </p>
      </li>
      <li>
        <p>
          Total <span>{total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive <span>{positive}%</span>
        </p>
      </li>
    </ul>
  );
}
