import React from 'react';
import classnames from 'classnames';


const Card = ({ classNames, children }) => {
    return (
        <div className={classnames('border rounded-lg', {
            [`${classNames}`]: true
        })}>
            { children }
        </div>
    );
};

export default Card;