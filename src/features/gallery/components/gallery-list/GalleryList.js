import React, { Component } from "react";
import GalleryElt from "./gallery-elt/GalleryElt";
import { Link } from "react-router-dom";

export default class GalleryList extends Component {
  render() {
    return (
      <div className="w-75 d-flex flex-row flex-wrap justify-content-center">
        {this.props.products.map((p, i) => (
            <Link
                to="/productDetails/{}"
            >
          <GalleryElt key={p.id} product={p} />
            </Link>
        ))}
      </div>
    );
  }
}
