import React from 'react';
import PropTypes from 'prop-types';


const Img = ({ src, alt, className }) => {
    return (
        <img src={src} alt={alt} className={className} />
    );
};

Img.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string
};

Img.defaultProps = {
    className: "" 
};

export default Img;
