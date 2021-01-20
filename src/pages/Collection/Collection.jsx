import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.scss';

const Collection = ({collection}) => {
    console.log(collection);
    return (
        <div className='collection'>
            <h2>{collection.title}</h2>
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
