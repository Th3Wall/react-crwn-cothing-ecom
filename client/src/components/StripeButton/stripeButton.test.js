import React from 'react';
import { shallow } from 'enzyme';
import StripeButton from './StripeButton';

describe('StripeButton', () => {
    it('should display StripeButton component', () => {
        const mockPrice = 1245;
        const wrapper = shallow(<StripeButton {...mockPrice} />);
        expect(wrapper).toMatchSnapshot();
    })
})