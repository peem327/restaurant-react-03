import React, { Component } from 'react';
// import Navbar from './../components/Header/Navbar';
import Head from '../components/header/Head';
import Social from './../components/body/Social';
// import Footer from '../components/Footer';
import Categories from '../components/body/Categories';
import Newsfeed from '../components/body/Newsfeed';


export class Home extends Component {
constructor(props) {
    super(props)
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
    console.log(category)
    this.props.history.push('category/' + category);
  }

    render() {
        return (
            <div >
              
                <Head/>
                <Categories onProductCategory ={this.productCategory}/>
                <Newsfeed/>
                <Social/>
            </div>
        )
    }
}

export default Home;
