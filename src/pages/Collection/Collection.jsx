import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import {
    CollectionList,
    CollectionTitle,
    CollectionWrp
} from './collection.styles';

const Collection = ({collection}) => {
    const { items, title } = collection;
    return (
        <CollectionWrp>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionList>
                {
                    items.map(item => 
                        <CollectionItem key={item.id} item={item} />
                    )
                }
            </CollectionList>
        </CollectionWrp>
    )
}

// ownProps gives us the ability to use the props that this component have
// This is possible because the Collection component is called from a Route component in the Shop Page
// In this case we can then accss the match prop
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);
