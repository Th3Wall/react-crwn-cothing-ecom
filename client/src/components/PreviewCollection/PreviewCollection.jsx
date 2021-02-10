import CollectionItem from '../CollectionItem/CollectionItem';
import { CollectionPreviewTitle, CollectionPreviewWrp, Preview } from './previewCollection.styles';
import { withRouter } from 'react-router-dom';

const collectionPreviewVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 0.2,
            staggerChildren: 0.4
        }
    }
}

const collectionItemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

const PreviewCollection = ({ title, items, history, match, routeName, variants }) => {
    return (
        <CollectionPreviewWrp variants={variants}>
            <CollectionPreviewTitle
                variants={variants}
                onClick={() => history.push(`${match.path}/${routeName}`)}
            >
                {title}
            </CollectionPreviewTitle>
            <Preview
                variants={collectionPreviewVariants}
                initial="hidden"
                animate="show"
            >
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(item => (
                            <CollectionItem key={item.id} item={item} variants={collectionItemVariants} />
                        ))
                }
            </Preview>
        </CollectionPreviewWrp>
    )
}

export default withRouter(PreviewCollection);
