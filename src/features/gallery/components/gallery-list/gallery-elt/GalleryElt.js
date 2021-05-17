import React, { Component } from "react";
import Style from "./GalleryElement.module.scss";

export default class GalleryElement extends Component {
  render() {
    return (
      <div className={"bg-light d-flex flex-row " + Style.container}>
        <img width="185" src={this.props.product.image} alt="movie" />
        <div className="flex-fill d-flex flex-column p-3">
          <h5>{this.props.product.title}</h5>
          <hr className="w-100" />
          <p className="flex-fill">{this.props.product.description}</p>
          <div className="d-flex flex-row justify-content-end align-items-stretch">
            <button
              onClick={(e) => {
                e.stopPropagation();
                this.props.addCart(this.props.product);
              }}
              className="btn btn-sm btn-primary"
            >
              {this.props.product.price}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
