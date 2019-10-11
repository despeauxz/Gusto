import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Text = ({ color, variant, size, font, children }) => {
    return (
        <span className={classnames({ [`text-${color}-${variant} text-${size} font-${font}`]: true })}>
      {children}
    </span>
    );
};

Text.propTypes = {
    color: PropTypes.string.isRequired,
    variant: PropTypes.number.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']),
    font: PropTypes.oneOf(['sans', 'serif', 'mono']),
    children: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.element
    ]).isRequired
};

Text.defaultProps = {
    size: "base",
    font: "sans"
};

export default Text;
