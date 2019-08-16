import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.components";

import "./shop.component.scss";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionsOverview />
  </div>
);

export default ShopPage;
