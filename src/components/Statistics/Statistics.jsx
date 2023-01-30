import PropTypes from 'prop-types';
import css from './Statistics.module.css'
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <div className={css.statistics}>
      <p>good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>bad: {bad} </p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage? positivePercentage:0}%</p>
    </div>
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};