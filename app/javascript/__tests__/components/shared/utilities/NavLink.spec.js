/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NavLink from '../../../../assets/components/shared/utilities/NavLink';


const props = {
    to: "/",
    active: true,
    alt: "Overview",
    icon: "https://placeholder.com/200/300"
};

describe('<NavLink />', () => {
    it('render the NavLink component', () => {
        const shallowWrapper = shallow(<NavLink {...props}>
            Hello World
        </NavLink>);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('NavLink')).toBeTruthy();
    });
}); 
