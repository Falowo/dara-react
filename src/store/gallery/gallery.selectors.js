import { createSelector } from "reselect";

export const gallerySelector = (state) => state.gallery;

export const galleryIsLoadingSelector = createSelector(
  [gallerySelector],
  (gallery) => gallery.isLoading
);

export const galleryDataSelector = createSelector(
  [gallerySelector],
  (gallery) => gallery.data
);

export const gallerySelectedProductIndexSelector = createSelector(
  [gallerySelector],
  (gallery) => gallery.selectedProduct
);

export const gallerySelectedProductSelector = createSelector(
  [galleryDataSelector, gallerySelectedProductIndexSelector],
  (galleryData, i) => galleryData[i]
);
