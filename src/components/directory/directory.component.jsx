import React, { Component } from "react";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.unsplash.com/photo-1518061124653-4b85d51931f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "jackets",
          imageUrl:
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "sneakers",
          imageUrl:
            "https://images.unsplash.com/photo-1552346053-c33aa8b3d665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          title: "womens",
          imageUrl:
            "https://images.unsplash.com/photo-1555093328-db4dc2eab393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          size: "large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          title: "mens",
          imageUrl:
            "https://images.unsplash.com/photo-1563712013297-7a6a3c884ad0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          size: "large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSections }) => (
          <MenuItem key={id} {...otherSections} />
        ))}
      </div>
    );
  }
}

export default Directory;
