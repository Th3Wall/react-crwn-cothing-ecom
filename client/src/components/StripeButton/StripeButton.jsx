import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishedKey = 'pk_test_51IBr8VHqXDEPY8zA15Ee2YhUD4RZlfpEPYKi4A7sHMZInj5iRYswwMS8dn4o04Se2ophvJbUal1fAThQlWO8GQUz00ZN0Bd13Y';

    const onPaidCart = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful!')
        }).catch(error => {
            console.log('Payment error ', error);
            alert('There was an issue with your payment. Please make sure you use the provided credit card')
        })
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
