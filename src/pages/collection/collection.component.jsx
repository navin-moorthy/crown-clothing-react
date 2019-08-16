import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItems from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = () => (
  <div className="collection-page">
    <h2>Collection Page</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
