import { takeEvery } from "redux-saga/effects";

import { ShopActionTypes } from "./shop.types";

export function* fetchCollectionAsync() {
  yield console.log("I am fired");
}

export function* fetchCollectionsStart() {
  console.log("1");
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
