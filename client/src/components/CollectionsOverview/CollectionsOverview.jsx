import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../PreviewCollection/PreviewCollection';
import { CollectionOverviewWrp } from './collectionsOverview.styles';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 0.2,
            staggerChildren: 0.3
        }
    }
}

const item = {
    hidden: { opacity: 0,  y: '-30px' },
    show: { opacity: 1, y: '0px' }
}

const CollectionsOverview = ({collections}) => {
    return (
        <CollectionOverviewWrp
            variants={container}
            initial="hidden"
            animate="show"
        >
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} variants={item} />
                ))
            }
        </CollectionOverviewWrp>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
