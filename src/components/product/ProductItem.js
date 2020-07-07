import React, { Component } from "react";
import {Link} from 'react-router-dom'

export class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.getLocate = this.getLocate.bind(this)
  }
  showCard() {
    if (this.props.products) {
      return this.props.products.map((card) => (
        <div key={card.id} className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
          <div className="card align-items-center">
            <div className="view overlay">
              <img src={card.thumbnail} className="card-img-top"  />
              <Link href ={()=>this.props.onProductDetail(card)}>
                <div className="mask rgba-white-slight" />
              </Link>
            </div>
            <div className="card-body text-center">
              <Link href ={()=>this.props.onProductDetail(card)} className="grey-text">
                <h6> {card.categories} </h6>
              </Link>
              <h5 className="mb-3">
                <strong>
                  <Link href ={()=>this.props.onProductDetail(card)} className="dark-grey-text">
                    {card.productName}
                  </Link>
                </strong>
              </h5>
              <h5 className="font-weight-bold blue-text mb-0">
                <strong> {card.unitPrice} THB</strong>
              </h5>
              <button type="button" className="btn btn-success" onClick={()=>this.props.onProductDetail(card)}>คลิก</button>
            </div>
          </div>
        </div>
      ));
    }
  }

  getLocate(card){
    this.props.onProductDetail(card)
  }

  render() {
    console.log("props >>>>>>> " + JSON.stringify(this.props))
    // const {thumbnail, productName, unitPrice, categories} =this.props.product
    return (
      <div>
        <div className="container mt-5">
          <section className="dark-grey-text text-center">
            <h3 className="font-weight-bold mb-4 pb-2">Our bestsellers</h3>
            <p className="grey-text w-responsive mx-auto mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit fugit,
              error amet numquam iure provident voluptate esse quasi nostrum
              quisquam eum porro a pariatur veniam.
            </p>
            <div className="row">
          {this.showCard()}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ProductItem;
