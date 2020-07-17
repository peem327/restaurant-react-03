import React, { Component } from "react";
// import ProductItem from './ProductItem';
import Card from "./../card/Card";

export class ProductList extends Component {

  showProduct() {
    try {
    if (this.props.product) {
      return <Card key={this.props.product.id} product={this.props.product} onAddOrder={this.props.onAddOrder}/>;
    }
  } catch (error) {
    }}

  render() {
    return (
      <div>
        {/* <ProductItem showRecipes={this.showRecipes()}/> */}
        {this.showProduct()}
      </div>
    );
  }
}

export default ProductList;
