import React from "react";
import { Route } from "react-router-dom";

import CategoryPage from "../category/category.components";
import CollectionsOverview from "../../components/collections-overview/collections-overview.components";

import "./shop.component.scss";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default ShopPage;
