import React, { Component } from "react";

import { SHOP_DATA } from "./shop.data";

import "./shop.component.scss";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollections }) => (
          <CollectionPreview key={id} {...otherCollections} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
