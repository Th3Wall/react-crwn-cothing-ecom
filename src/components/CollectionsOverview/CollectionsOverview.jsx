import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../PreviewCollection/PreviewCollection';
import './collectionsOverview.scss';

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collection-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);
