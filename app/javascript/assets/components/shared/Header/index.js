/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Img } from '../utilities';
import './index.scss';


const AuthHeader = (props) => {
    const { name } = props;
    return (
        <>
            <div className="flex px-4 lg:px-10 py-4 items-center justify-between flex-none">
                <div className="flex flex-col">
                    <h3 className="text-gray-800 text-base lg:text-xl mb-1 font-bold">{name}</h3>
                </div>
                <div className="relative">
                    <div className="flex items-center">
                        <Link to="#">
                            <span className="mr-6">
                                <i className="icon ion-md-search text-2xl font-thin" />
                            </span>                        
                        </Link>
                        <Link to="#">
                            <span className="mr-2">
                                <i className="icon ion-md-notifications-outline text-2xl font-thin relative">
                                    <span className="noti rounded-full bg-green-600" />
                                </i>
                            </span>
                        </Link>
                        <div className="divider" />
                        <Link to="#">
                            <div className="inline-block rounded-full bg-gray-300 pr-5 h-8 avatar">
                                <Img className="rounded-full float-left h-8" src="https://randomuser.me/api/portraits/women/34.jpg" alt="Kate" />
                                <span className="ml-3 text-gray-800 text-sm">Kate Horwitz</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

AuthHeader.propTypes = {
    name: PropTypes.string.isRequired
};

export default AuthHeader;
