import PropTypes from 'prop-types';

import { ButtonsList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onClickButtons,
  options,
  onLeaveFeedback,
}) => {
  return (
    <div onClick={onClickButtons}>
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
  onClickButtons: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
