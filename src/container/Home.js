import React, { Component } from "react";
import Head from "./../components/Head"
import Social from "./../components/body/Social";
import Categories from "../components/body/Categories";
import NewsFeed from "../components/body/NewsFeed";

export class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // }
    this.productCategory = this.productCategory.bind(this);
  }

  // componentDidMount() {
  //   this.props.productsFetch();
  // //   axios.get("http://localhost:3004/blogs").then((res) => {
  // //     this.setState({ products: res.data });
  // //   });
  // }
  productCategory(category) {
    console.log(category);
    this.props.history.push("category/" + category);
  }

  render() {
    return (
      <div>
        <Head />
        <Categories onProductCategory={this.productCategory} />
        <NewsFeed />
        <Social />
      </div>
    );
  }
}

export default Home;
