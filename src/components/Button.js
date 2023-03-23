import PropTypes from 'prop-types';

const Button = ({ content }) => <button type="button">{content}</button>;

Button.propTypes = { content: PropTypes.string.isRequired };

export default Button;
