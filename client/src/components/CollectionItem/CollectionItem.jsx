import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import {
    CollectionItemContainer,
    AddToCartButton,
    BackgroundImage,
    NameContainer,
    PriceContainer,
    CollectionFooterContainer
} from './collectionItem.styles';

const CollectionItem = ({ item, addItem }) => {
    const { id, name, price, imageUrl } = item;
    return (
        <CollectionItemContainer key={id}>
            <BackgroundImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddToCartButton
                inverted
                onClick={() => addItem(item)}
            >
                Add to Cart
            </AddToCartButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);
