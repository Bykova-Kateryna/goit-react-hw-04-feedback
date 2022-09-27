import PropTypes from 'prop-types';
import {
  ButtonFeedbackSection,
  FeedbackButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const objectButton = options.map(btn => {
    return (
      <FeedbackButton
        type="button"
        key={btn}
        onClick={() => onLeaveFeedback(btn)}
      >
        {btn}
      </FeedbackButton>
    );
  });

  return <ButtonFeedbackSection>{objectButton}</ButtonFeedbackSection>;
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
