import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { productFetch } from "./../../actions";
import ProductList from "./../../components/product/ProductList";
import Monitor from "./../../components/monitor/Monitor";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // products : ''
    };
  }

  componentDidMount() {
    // axios.get(`http://localhost:3004/blogs/${this.props.match.params.id}`).then((res) =>{
    //     console.log(res.data)
    //       this.setState({
    //         products : res.data
    //       })

    // })

    if (this.props.match.params.id) {
      this.props.productFetch(this.props.match.params.id);
    }
  }

  render() {
    return (
      <div>
        <Monitor product={this.props.products} />
      </div>
    );
  }
}
const mapStateToProps = ({ products }) => ({
  products,
});
export default connect(mapStateToProps, { productFetch })(Product);
