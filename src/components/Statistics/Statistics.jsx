import PropTypes from 'prop-types';

import { StatisticList, StatisticItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticList>
      <StatisticItem>
        <span>Good: </span>
        <span>{good}</span>
      </StatisticItem>
      <StatisticItem>
        <span>Neutral: </span>
        <span>{neutral}</span>
      </StatisticItem>
      <StatisticItem>
        <span>Bad:</span>
        <span>{bad}</span>
      </StatisticItem>

      <StatisticItem>
        <span>Total:</span>
        <span>{total}</span>
      </StatisticItem>

      <StatisticItem>
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </StatisticItem>
    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
