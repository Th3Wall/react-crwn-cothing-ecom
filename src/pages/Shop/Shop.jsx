import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import Collection from '../Collection/Collection';
import './shop.scss';

const ShopPage = ({match}) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route exact path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    )
}
export default ShopPage;