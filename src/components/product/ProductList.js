import React, { Component } from "react";
// import ProductItem from './ProductItem';
import Card from "./../card/Card";

export class ProductList extends Component {
  showProduct() {
    console.log(this.props);
    if (this.props.products) {
      return <Card key={this.props.products.id} products={this.props.products} />;
    }
  }

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
