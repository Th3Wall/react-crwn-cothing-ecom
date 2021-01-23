import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../PreviewCollection/PreviewCollection';
import { CollectionOverviewWrp } from './collectionsOverview.styles';

const CollectionsOverview = ({collections}) => {
    return (
        <CollectionOverviewWrp>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </CollectionOverviewWrp>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
