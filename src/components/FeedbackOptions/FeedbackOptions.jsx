import PropTypes from 'prop-types';

import { ButtonsList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ButtonsList>
        {options.map(option => (
          <li key={option}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </li>
        ))}
      </ButtonsList>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
