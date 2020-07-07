import React, { Component } from "react";
// import axios from "axios";
import ProductItem from "./../components/product/ProductItem";
// import Category from './../components/Category/Category';
import {connect} from 'react-redux'
import {productsFetch} from '../actions'

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: null,
    };
    this.ProductDetail = this.ProductDetail.bind(this);
  }

  componentDidMount() {
    this.props.productsFetch();
  //   axios.get("http://localhost:3004/blogs").then((res) => {
  //     this.setState({ products: res.data });
  //   });
  }

  ProductDetail(product) {
    this.props.history.push('product/' + product.id);
  }



  render() {
    return (
      <div>
        {/* <Category products={this.state.products}/> */}
        <ProductItem products={this.props.products} onProductDetail={this.ProductDetail}/>
      </div>
    );
  }
}
const mapStateToProps =({products}) => ({
  products
})
export default connect(mapStateToProps, {productsFetch}) (Home);
