import CollectionItem from '../CollectionItem/CollectionItem';
import { CollectionPreviewTitle, CollectionPreviewWrp, Preview } from './previewCollection.styles';
import { withRouter } from 'react-router-dom';

const PreviewCollection = ({ title, items, history, match, routeName }) => {
    return (
        <CollectionPreviewWrp>
            <CollectionPreviewTitle
                onClick={() => history.push(`${match.path}/${routeName}`)}
            >
                {title.toUpperCase()}
            </CollectionPreviewTitle>
            <Preview>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(item => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                }
            </Preview>
        </CollectionPreviewWrp>
    )
}

export default withRouter(PreviewCollection);
