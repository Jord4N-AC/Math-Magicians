import PropTypes from 'prop-types';

const Button = ({ content, title }) => <button type="button" title={title}>{content}</button>;

Button.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
