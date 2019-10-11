/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Chart, Ticket, Logo } from '../../../public/img';
import { NavLink, Img } from '../utilities';
import './index.scss';


class Sidebar extends React.PureComponent {
    render() {
        return (
            <div className="sidebar flex-none lg:w-64 md:w-16 pb-6 hidden md:block">
                <div className="text-white mb-2 mt-3 px-6 flex justify-center mx-auto mt-8">
                    <div className="relative">
                        <Link to="/" className="font-semibold items-center md:flex md:justify-center lg:flex leading-tight mb-1 truncate text-center text-xl md:hidden lg:block">
                            <Img src={Logo} className="mr-4 w-6 h-6 md:mx-auto" alt="logo" />
                            <span>Gusto</span>
                        </Link>
                        <div className="lg:flex items-center justify-center md:hidden my-4 relative">
                            <span className="bg-green-600 rounded-full block w-2 h-2 mr-2" />
                            <Link to="#" className="text-white opacity-50 text-sm">Online</Link>
                        </div>
                    </div>
                </div>
                <div className="my-8 nav">
                    <NavLink to="/me" active alt="Overview" icon={Chart} />
                    <NavLink to="/" alt="Tickets" icon={Ticket} />
                    <NavLink to="/" alt="Overview" icon={Ticket} />
                    <NavLink to="/" alt="Overview" icon={Ticket} />
                    <NavLink to="/settings" alt="Settings" icon={Ticket} />
                </div>
            </div>
        );
    }
}

export default Sidebar;
