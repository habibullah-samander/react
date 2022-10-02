import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header>
      <div className='container' style={headerStyles}>
        <Link className='header-title' to='/'>
          <h1>{text}</h1>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,04)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

export default Header;
