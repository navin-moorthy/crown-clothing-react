import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import "./shop.component.scss";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollections }) => (
      <CollectionPreview key={id} {...otherCollections} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
