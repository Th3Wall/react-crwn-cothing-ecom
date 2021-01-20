import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import Button from '../Button/Button';
import './collectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
    const { id, name, price, imageUrl } = item;
    return (
        <div className='collection-item' key={id}>
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button
                inverted
                onClick={() => addItem(item)}
            >
                Add to Cart
            </Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);
