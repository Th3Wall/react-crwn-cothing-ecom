import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner', () => {
    it('should display Spinner component', () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper).toMatchSnapshot();
    })
})