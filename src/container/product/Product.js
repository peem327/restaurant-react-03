import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { productFetch } from "./../../actions";
import ProductList from "./../../components/product/ProductList";

class componentName extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //   product : ''
    // }
  }

  componentDidMount() {
    // axios.get(`http://localhost:3004/blogs/${this.props.match.params.id}`).then((res) =>{
    //       this.setState({
    //         product : res.data
    //       })
    // })

    // if(this.props.match.params.id){
    //   this.props.productFetch(this.props.match.params.id);
    //   console.log(this.props.productFetch(this.props.match.params.id))
    // }
    
  }

  render() {
    return (
      <div>
        {/* <ProductList products={this.state.product}/> */}
      </div>
    );
  }
}
const mapStateToProps = ({ products }) => {
  return products;
};
export default connect(mapStateToProps, { productFetch })(
  componentName
);
