import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
    it('should display Button component', () => {
        const wrapper = shallow(<Button/>);
        expect(wrapper).toMatchSnapshot();
    })
})