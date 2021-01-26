import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import Collection from '../Collection/Collection';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsFetchingCollections, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import { createStructuredSelector } from 'reselect';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
        return (
            <div className='shop-page'>
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
                />
                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionsWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsFetchingCollections,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);