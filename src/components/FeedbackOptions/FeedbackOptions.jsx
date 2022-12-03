import PropTypes from 'prop-types';

import { OptionsList, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => {
        return (
          <li key={option}>
            <OptionButton type="button" onClick={() => onLeaveFeedback(option)}>
              {option.toUpperCase()}
            </OptionButton>
          </li>
        );
      })}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
