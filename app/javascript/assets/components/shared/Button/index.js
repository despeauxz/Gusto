/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({ type, outline, variant, size, round, color, className, stretch, children, ...rest }) => {
  const buttonSize = () => {
    let value = '';
    switch(size) {
    case 'big':
      value = 'p-4';
      break;
    case 'medium':
      value = 'px-4 py-2';
      break;
    case 'small':
      value = 'p-1 px-3';
      break;
    default:
      return '';
    }

    return value;
  };

  return (
    <button type={type} {...rest} className={classnames(
      'text-sm outline-none rounded text-white',
      {
        [`text-${color}-${variant} border border-${color}-${variant} bg-transparent hover:text-${color}-${variant - 100}`]: outline
      },
      {
        'block w-full': stretch
      },
      {
        [`bg-${color}-${variant} text-white border-${color}-${variant} hover:border-transparent hover:text-${variant - 100} hover:bg-${color}-${variant + 100}`]: !outline
      },
      {
        'rounded-full': round
      },
      {
        [`${buttonSize()} ${className}`]: true
      }
    )}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['big', 'medium', 'small']),
  round: PropTypes.bool,
  variant: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  stretch: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
};

Button.defaultProps = {
  size: 'small',
  outline: false,
  stretch: false,
  round: false
};

export default Button;