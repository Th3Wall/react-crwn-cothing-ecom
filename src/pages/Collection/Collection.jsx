import './collection.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

const Collection = ({collection}) => {
    const { items, title } = collection;
    return (
        <div className='collection'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => 
                        <CollectionItem key={item.id} item={item} />
                    )
                }
            </div>
        </div>
    )
}

// ownProps gives us the ability to use the props that this component have
// This is possible because the Collection component is called from a Route component in the Shop Page
// In this case we can then accss the match prop
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);
