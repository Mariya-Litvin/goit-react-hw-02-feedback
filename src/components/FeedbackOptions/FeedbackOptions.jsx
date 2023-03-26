import PropTypes from 'prop-types';

import { ButtonsList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onClick, options, onLeaveFeedback }) => {
  return (
    <div onClick={onClick}>
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
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
