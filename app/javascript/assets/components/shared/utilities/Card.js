/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Card.scss';

const Card = ({ name, count, active, ...rest }) => {
    return (
        <div className="my-1 px-1 w-1/2 md:w-1/4 h-auto lg:my-4 lg:px-6 lg:w-1/4 text-center relative" {...rest}>
            <div className={classnames('border rounded-lg p-6 shadow', {
                'border-purple-600 text-purple-600': active
            },
            {
                'text-gray-800': !active
            })}>
                <h3 className={classnames('text-base font-semibold', {
                    'text-gray-500': !active
                })}>{ name }</h3>
                <h1 className="text-4xl font-semibold">{ count }</h1>
            </div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    active: PropTypes.bool
};

Card.defaultProps = {
    active: false
};

export default Card;
