/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Text from '../../../../assets/components/shared/utilities/Text';


const props = {
    color: "blue",
    variant: 600,
    size: "sm",
    font: "sans",
};

describe('<Text />', () => {
    it('render the Text component', () => {
        const shallowWrapper = shallow(<Text {...props}>
            Hello World
        </Text>);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('Text')).toBeTruthy();
    });
}); 
