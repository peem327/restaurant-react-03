import React, { Component } from "react";


class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { thumbnail, productName, detail, unitPrice } = this.props.product;
    return (
      <div>
        <div className="container my-5 py-5 z-depth-1">
          <section className="text-center">
            <h3 className="font-weight-bold mb-5">Product Details</h3>
            <div className="row">
              <div className="col-lg-6">
                <div
                  id="carousel-thumb1"
                  className="carousel slide carousel-fade carousel-thumbnails mb-5 pb-4"
                  data-ride="carousel"
                >
                  <div
                    className="carousel-inner text-center text-md-left"
                    role="listbox"
                  >
                    <div className="carousel-item active">
                      <img
                        src={thumbnail}
                        alt="First slide"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel-thumb1"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel-thumb1"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-5 text-center text-md-left">
                <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                  {productName}
                </h2>
                <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                  <span className="red-text font-weight-bold">
                    <strong>{unitPrice} THB</strong>
                  </span>
                  {/* <span className="grey-text">
                    <small>
                      <s>$1789</s>
                    </small>
                  </span> */}
                </h3>
                <div className="font-weight-normal">
                  <p className="ml-xl-0 ml-4">{detail}</p>
                  <p className="ml-xl-0 ml-4">
                    <strong>Availability: </strong>In stock
                  </p>
                  <div className="mt-5">
                    <div className="row mt-3 mb-4">
                      <div className="col-md-12 text-center text-md-left text-md-right">
                        <button
                          className="btn btn-primary btn-rounded"
                          onClick={() =>
                            this.props.onAddOrder(this.props.product)
                          }
                        >
                          <i
                            className="fas fa-cart-plus mr-2"
                            aria-hidden="true"
                          />{" "}
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Card;
