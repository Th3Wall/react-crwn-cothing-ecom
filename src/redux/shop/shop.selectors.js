import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

//It returns our collections object as an array using Object.keys method
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = (collectionUrlParam) => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
);

export const selectIsFetchingCollections = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
    // I have added the double !! before the shop.collections in order to transform it in a boolean value;
    // I need it in order to know if the collections are loaded and so if the loader has to be shown or not;
    // Inside the Shop Component I will invert the condition with a ! before the variable that comes out from the selector;
)