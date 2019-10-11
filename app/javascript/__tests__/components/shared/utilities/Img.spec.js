/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Img from '../../../../assets/components/shared/utilities/Img';


const props = {
    src: "https://placeholder.com/200/300",
    alt: "Placeholder",
    className: ""
};

describe('<Img />', () => {
    it('render the Img component', () => {
        const shallowWrapper = shallow(<Img {...props} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('Img')).toBeTruthy();
    });
}); 
