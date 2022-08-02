import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedbackPercentage }) => {
  return (
    <ul className={styles.statistics__title}>
      <li>
        <p className={styles.statistics__descr}>Good: {good}</p>
      </li>
      <li>
        <p className={styles.statistics__descr}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={styles.statistics__descr}>Bad: {bad}</p>
      </li>
      <li>
        <p className={styles.statistics__descr}>Total: {total}</p>
      </li>
      <li>
        <p className={styles.statistics__descr}>Positive feedback: {positiveFeedbackPercentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
