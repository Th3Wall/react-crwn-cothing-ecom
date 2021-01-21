import './stripeButton.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishedKey = 'pk_test_51IBr8VHqXDEPY8zA15Ee2YhUD4RZlfpEPYKi4A7sHMZInj5iRYswwMS8dn4o04Se2ophvJbUal1fAThQlWO8GQUz00ZN0Bd13Y';

    const onPaidCart = token => {
        console.log(token);
        alert('Payment successful!');
    }

    return (
        <StripeCheckout
            label={'Pay Now'}
            name={'CRWN Clothing Ltd.'}
            description={`Your total is $${price}`}
            panelLabel={'Pay Now'}
            billingAddress
            shoppingAddress
            image={'https://svgshare.com/i/CUz.svg'}
            amount={priceForStripe}
            stripeKey={publishedKey}
            token={onPaidCart}
        />
    )
}

export default StripeButton
