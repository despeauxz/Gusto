import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Img from './Img';


const NavLink = ({ to, active, className, icon, alt }) => {
    return (
        <div className="flex items-center" aria-label={alt} data-balloon-pos="right">
            <Link to={`${to}`} className={classnames('text-white opacity-75 block w-full p-3 py-3 flex',
                {
                    'active': active
                },
                {
                    [`${className}`]: true
                }
            )}>
                <span>
                    <Img src={icon} alt="link icon" className="w-4 h-4" />
                </span>
                <h4 className="text-xs md:hidden lg:block ml-4 font-medium text-white tracking-wider">{ alt }</h4>
            </Link>
        </div>
    );
};

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    active: PropTypes.bool,
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

NavLink.defaultProps = {
    active: false,
    className: ""
};


export default NavLink;
