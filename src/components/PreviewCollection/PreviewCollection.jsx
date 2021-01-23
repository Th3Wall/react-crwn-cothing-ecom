import CollectionItem from '../CollectionItem/CollectionItem';
import { CollectionPreviewTitle, CollectionPreviewWrp, Preview } from './previewCollection.styles';

const PreviewCollection = ({ title, items }) => {
    return (
        <CollectionPreviewWrp>
            <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
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

export default PreviewCollection;
