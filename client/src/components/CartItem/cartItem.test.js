import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './CartItem';

describe('CartItem', () => {
    it('should display CartItem component', () => {

        const mockProperties = {
            item: {
                imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
                name: 'Sneakers Nike Air Max',
                price: 99,
                quantity: 1
            }
        }

        const wrapper = shallow(<CartItem {...mockProperties} />);
        expect(wrapper).toMatchSnapshot();
    })
})