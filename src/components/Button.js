import PropTypes from 'prop-types';
import '../assets/Button.css';

const Button = ({ content, title, className }) => <button type="button" className={className} title={title}>{content}</button>;

Button.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
