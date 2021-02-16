import { shallow } from 'enzyme';
import React from 'react';
import Homepage from './Homepage';

describe('Homepage', () => {
    it('should display homepage', () => {
        expect(shallow(<Homepage/>)).toMatchSnapshot();
    })
})