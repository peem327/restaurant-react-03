import React, { Component } from "react";

export class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  showCard() {
    try {
          if (this.props.products) {
      return this.props.products.map((card) => (
        <div key={card.id} className="container  col-md-4 mb-4 d-flex align-items-stretch">
          <button className="Category btn btn-link " type="submit" onClick={()=>this.props.onProductDetail(card)}>
          <div className="card align-items-center">
            <div className="view overlay">
              <img src={card.thumbnail} className="card-img-top"  />
                <div className="mask rgba-white-slight" />
 
            </div>
            <div className="card-body text-center">
                <h6 className="grey-text"> {card.categories} </h6>

              <h5 className="mb-3">
                <strong className="dark-grey-text">
                    {card.productName}
                </strong>
              </h5>
              <h5 className="font-weight-bold blue-text mb-0">
                <strong> {card.unitPrice} THB</strong>
              </h5>
            </div>
          </div>
          </button>
        </div>
      ));
    }
    } catch (error) {
      
    }

  }

  getLocate(card){
    this.props.onProductDetail(card)
  }

  render() {
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
