import React from 'react';
import { shallow } from 'enzyme';
import SignInOut from './SignInOut';

describe('SignInOut', () => {
    it('should display SignInOut component', () => {
        const wrapper = shallow(<SignInOut/>);
        expect(wrapper).toMatchSnapshot();
    })
})